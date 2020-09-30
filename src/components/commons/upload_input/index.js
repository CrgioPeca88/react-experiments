//Dependencies
import React, {Component} from 'react';

//Assets
import './upload_input.css';
import FileTextToUbigeos from '../../../services/file-text-to-ubigeos';
import { Department, Province, District } from '../../../objs/Ubigeo';
import Table from '../table';

class UploadInput extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      ubigeosList: []
    };
    this.headers= {
      department: ["Codigo", "Nombre", "Código Padre", "Descripción Padre"],
      province: ["Codigo", "Nombre", "Código Padre", "Descripción Padre"],
      district: ["Codigo", "Nombre", "Código Padre", "Descripción Padre"]
    };
    this.ubigeos = {
      department: "department",
      province: "province",
      district: "district"
    };
    this.handleFileSelected = this.handleFileSelected.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleUbigeosRows = this.handleUbigeosRows.bind(this);
    this.getDataTable = this.getDataTable.bind(this);
  }

  handleFileSelected(fileEvent) {
    let file = fileEvent.target.files[0];
    let read = new FileReader();
    read.readAsText(file);
    read.onloadend = () => {
      this.setState({
        result: read.result,
        tableReady: false
      });
    }
  }

  handleUbigeosRows(ubigeos) {
    return ubigeos.map(ubigeo => {
      return {
        department: new Department(ubigeo[0].code, ubigeo[0].name, false, "-"),
        province: new Province(ubigeo[1].code, ubigeo[1].name, true, "department"),
        district: new District(ubigeo[2].code, ubigeo[2].name, true, "province")
      };
    })
  };

  getDataTable(ubigeosRows, ubigeoName) {
    function loop(entry, out, ubigeoName) {
      if (entry.length === 0){
        return out;
      } else {
        let actual = entry.pop();
        actual[ubigeoName]['dataParent'] = (actual[ubigeoName]['containParent'])
        ? {
          code: actual[actual[ubigeoName]['parent']]['code'],
          name: actual[actual[ubigeoName]['parent']]['name']
        }
        : { code:"-", name:"-" };
        let actualExist = out.filter(e => e[ubigeoName].code === actual[ubigeoName].code);
        if(actualExist.length > 0 || actual[ubigeoName].code === "-") {
          return loop(entry, out, ubigeoName);
        } else {
          let u = {};
          u[ubigeoName] = actual[ubigeoName];
          out.push(u);
          let outSort = out.sort(function(a,b){
            return a[ubigeoName].code - b[ubigeoName].code;
          });
          return loop(entry, outSort, ubigeoName);
        }
      }
    }
    return loop(ubigeosRows, [], ubigeoName);
  }

  handleUploadClick(e) {
    const promise = FileTextToUbigeos.transform(this.state.result);
    Promise.all([promise]).then(ubigeos => {
      const ubigeosRows = this.handleUbigeosRows(ubigeos[0]);
      const dataDepartment = this.getDataTable([...ubigeosRows], 'department');
      const dataProvince = this.getDataTable([...ubigeosRows], 'province');
      const dataDistrict = this.getDataTable([...ubigeosRows], 'district');
      this.setState({
        ubigeosList: ubigeosRows,
        dataDepartment: dataDepartment,
        dataProvince: dataProvince,
        dataDistrict: dataDistrict,
        tableReady: true
      });
    }).catch(error => {
      console.log("Error transforming the file ==> ", error);
    });
  }

  render() {
    return(
      <div className="upload-section">
        <input type="file" id="file" className="input-file" accept=".txt" onChange={this.handleFileSelected} />
        <br/><br/>
        <button className="upload-button" onClick={this.handleUploadClick}> Upload </button>
        <hr></hr>
        {this.state.tableReady && <div>
          <h3>Departamento</h3>
          <Table headers={this.headers.department} rows={this.state.dataDepartment} ubigeo={this.ubigeos.department}/>
          <hr></hr>
          <h3>Provincia</h3>
          <Table headers={this.headers.province} rows={this.state.dataProvince} ubigeo={this.ubigeos.province}/>
          <hr></hr>
          <h3>Distrito</h3>
          <Table headers={this.headers.district} rows={this.state.dataDistrict} ubigeo={this.ubigeos.district}/>
          <hr></hr>
        </div>}
      </div>
    );
  }
}

export default UploadInput;
