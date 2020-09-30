//Dependencies
import React, {Component} from 'react';

//Assets
import './upload.css';
import UploadInput from '../commons/upload_input';

class Upload extends Component {
  render() {
    return (
        <div className="Upload">
          <h1>Upload file!</h1>
          <span>You can upload the <strong>ubigeos.txt</strong> file located in the project data folder</span>
          <UploadInput/>
        </div>
    );
  }
}

export default Upload;
