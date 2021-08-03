import './App.css';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from './components/Navbar';
import Paper from '@material-ui/core/Paper';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import { useState } from 'react';
import ImageModal from './components/ImageModal';

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    }
  });
  const [img, setImg] = useState(null);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper square>
          <div className="content">
            <Navbar />
            <UploadForm />
            <ImageGrid setImg={setImg} />
            <ImageModal img={img} setImg={setImg} />
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
