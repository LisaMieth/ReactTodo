import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyD5RGoTn0m7gxCzDH32k5da8P6HCMdg9eA",
    authDomain: "todoapp-8fa94.firebaseapp.com",
    databaseURL: "https://todoapp-8fa94.firebaseio.com",
    storageBucket: "todoapp-8fa94.appspot.com",
    messagingSenderId: "924007794578"
  };
  firebase.initializeApp(config);
} catch (e) { }

export var firebaseRef = firebase.database().ref();
export default firebase;
