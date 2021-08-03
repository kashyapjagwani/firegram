import { useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestoreToDelete = (collection, doc) => {

  useEffect(() => {
    if(doc) {
      const unsub = projectFirestore.collection(collection)
        .doc(doc.id)
        .delete()
        .then(() => {
        })

        return () => unsub();
    }
  }, [doc])
}

export default useFirestoreToDelete;