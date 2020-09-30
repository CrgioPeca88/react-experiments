//Dependencies
import {Component} from 'react';

class FileTextToUbigeos extends Component {

  transform(fileText) {
    return new Promise((resolve, reject) => {
      resolve(fileText.split("\n").map( function(line) {
        let ubigeos = line.split(" / ").map( function(ubigeo) {
          let element = ubigeo.replace(/“|”/, "").split(/(?<=[0-9])(\s)(?=[a-zA-Z])/);
          const codeFormat = (element[0] === "" || element[0] === undefined) ? "-" : element[0];
          const codeName = (element[2] === "" || element[2] === undefined) ? "-" : element[2];
          return {
              code: codeFormat,
              name: codeName
          }
        });
        return ubigeos;
      }).filter(ubigeo => {
        return ubigeo.length === 3;
      }));
    });
  }

}

export default new FileTextToUbigeos();
