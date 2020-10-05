//Dependencies
import React, {Component} from 'react';

//Assets
import './upload.css';
import UploadInput from '../commons/upload_input';

function FunctionComponent(props) {
  const { titulo, color } = props;
  return (
    <div className="test-section">
      <h2>{ titulo }, component from function!</h2>
      <span style={{color: color}}>Property = { titulo }</span>
    </div>
  );
}

FunctionComponent.defaultProps = {
  color: 'red',
  titulo: 'Test default props'
};

class Upload extends Component {
  render() {
    return (
        <div className="Upload">
          <h1>Upload file!</h1>
          <span>You can upload the <strong>ubigeos.txt</strong> file located in the project data folder</span>
          <UploadInput/>
          <FunctionComponent titulo="Test" color="gray"></FunctionComponent>
          <FunctionComponent></FunctionComponent>
        </div>
    );
  }
}

export default Upload;
