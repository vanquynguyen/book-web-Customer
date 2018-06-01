import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDG-bpcFc81xR28idx9MaEANSJ6v9KFURY",
    authDomain: "react-app-917b6.firebaseapp.com",
    databaseURL: "https://react-app-917b6.firebaseio.com",
    projectId: "react-app-917b6",
    storageBucket: "react-app-917b6.appspot.com",
    messagingSenderId: "422044923451"
};

firebase.initializeApp(config);

const database = firebase.database();

export {
    database,
};
