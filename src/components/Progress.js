import { Box, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const useStyles = makeStyles({
  progress: {
    marginTop: '48px',
    paddingLeft: '48px',
    paddingRight: '48px',
  },
});

const Progress = ({file, setFile}) => {
  const classes = useStyles();
  const {progress, url} = useStorage(file)

  useEffect(() => {
    if(url) {
      setFile(null)
    }
  }, [url])
  return ( 
    <div className={classes.progress}>
      <Typography component="div">
        <Box textAlign="center" fontStyle="italic" m={1}>
          Uploading...
        </Box>
      </Typography>
      <LinearProgress variant="determinate" color="secondary" value={progress} />
    </div>
   );
}
 
export default Progress;