import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAdcnxBPMMz6rkMih1H8HBWWhfwqKu7XHI",
  authDomain: "firegram-adc06.firebaseapp.com",
  projectId: "firegram-adc06",
  storageBucket: "firegram-adc06.appspot.com",
  messagingSenderId: "516060882748",
  appId: "1:516060882748:web:950754c9e3176ade2fa039"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp};