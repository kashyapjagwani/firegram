import { useEffect } from "react";
import { useState } from "react"
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let docs = [];
        snap.forEach(doc => {
          docs.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setDocs(docs)
      });

      return () => unsub();

  }, [collection])

  return {docs};
}

export default useFirestore;