import useFirestore from "../hooks/useFirestore";
import {motion} from 'framer-motion'

const ImageGrid = () => {
  const {docs} = useFirestore('images');

  return ( 
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" layout whileHover={{opacity:1}} key={doc.id}>
          <motion.img src={doc.url} alt="pic" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} />
        </motion.div>
      ))}
    </div>
  );
}
 
export default ImageGrid;