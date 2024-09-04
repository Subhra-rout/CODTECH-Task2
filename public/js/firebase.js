const firebaseConfig = {
    apiKey: "AIzaSyDna-CnErkr92zLf07LgVcUvL9Grfzyu0Y",
    authDomain: "blogging-website-aecc9.firebaseapp.com",
    projectId: "blogging-website-aecc9",
    storageBucket: "blogging-website-aecc9.appspot.com",
    messagingSenderId: "73057105240",
    appId: "1:73057105240:web:0ccf494aaba98d6677a12d"
};

firebase.initializeApp(firebaseConfig);

let db =firebase.firestore();