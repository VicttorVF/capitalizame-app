import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCq2qd6Ho2DfCOKWHS8--rXeSCqhtWdYAc",
    authDomain: "capitalizame-dev-react.firebaseapp.com",
    databaseURL: "https://capitalizame-dev-react.firebaseio.com",
    projectId: "capitalizame-dev-react",
    storageBucket: "capitalizame-dev-react.appspot.com",
    messagingSenderId: "217307921310",
    appId: "1:217307921310:web:e34b5e8b52cd0f62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;