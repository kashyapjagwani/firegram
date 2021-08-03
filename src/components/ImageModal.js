import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useState } from "react";
import { useEffect } from 'react';
import {motion} from 'framer-motion'
import useFirestoreToDelete from '../hooks/useFirestoreToDelete';

const ImageModal = ({img, setImg}) => {
  const [open, setOpen] = useState(false);
  const [imgToDelete, setImgToDelete] = useState(null);

  useEffect(() => {
    if(img) {
      setOpen(true);
    }
    else {
      setOpen(false);
    }
  }, [img]);

  const deleteImg = () => {
    setImgToDelete(img);
    setImg(null)
  }
  
  useFirestoreToDelete('images', imgToDelete)

  return (
    <>
    {img &&
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={() => {setImg(null)}}
      >
        <DialogContent>
          <motion.div className="modal-img-wrap">
            <motion.img src={img.url} alt="pic" />
          </motion.div>
        </DialogContent>
        <DialogActions>
          <Button variant="flat" autoFocus onClick={() => {setImg(null)}} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" onClick={deleteImg} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    }
    </>
   );
}
 
export default ImageModal;