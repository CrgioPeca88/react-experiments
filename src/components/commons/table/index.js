//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Assets
import './table.css';

class Table extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
    rows: PropTypes.array,
    ubigeo: PropTypes.string.isRequired
  }

  render(){
    const {headers, rows, ubigeo} = this.props;
    return(
      <div className="Table">
        <table>
          <thead>
            <tr>
            { headers.map((header, key) =>
              <th className="Cell Cell-Header" key={key}>{header}</th>
            )}
            </tr>
          </thead>
          <tbody>
            {rows && rows.map((row, key) =>
              <tr key={key}>
              <td className="Cell"><b>{row[ubigeo].code}</b></td>
              <td className="Cell">{row[ubigeo].name}</td>
              <td className="Cell"><b>{row[ubigeo].dataParent.code}</b></td>
              <td className="Cell">{row[ubigeo].dataParent.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
