import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Progress from './Progress';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
  button: {
    marginTop: '48px',
  }
}));

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const uploadFile = (e) => {
    let selectedFile = e.target.files[0]
    if(selectedFile) {
      setFile(selectedFile)
    }
  };
  const classes = useStyles()
  return (
    <div>
      { !file &&
        <>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onInput={uploadFile}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" className={classes.button} color="secondary" component="span">
              Upload
            </Button>
          </label>
        </>
      }
      { file && <Progress file={file} setFile={setFile} /> }
    </div>
   );
}
 
export default UploadForm;