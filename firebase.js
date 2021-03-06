
import * as firebase from "firebase";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBHBDu74c1v9BoLfq9M1zKokRM8l86Vbls",
//   authDomain: "recycle-bin-f4038.firebaseapp.com",
//   projectId: "recycle-bin-f4038",
//   storageBucket: "recycle-bin-f4038.appspot.com",
//   messagingSenderId: "976774741596",
//   appId: "1:976774741596:web:f2599e8aca8aa1ff4a7099"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBXIgyunGmRhCQyMQTOQaM2eRtf6cRo8Y4",
  authDomain: "notepad-274c4.firebaseapp.com",
  projectId: "notepad-274c4",
  storageBucket: "notepad-274c4.appspot.com",
  messagingSenderId: "334497846842",
  appId: "1:334497846842:web:8138ebfe76a98bd75d8703"
};

//Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

const auth = firebase.auth()

export { auth };