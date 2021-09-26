importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyBOccyUt9gkSxkaEoP6MP0otWCp12boFOU",
    authDomain: "pwa-pushnotification-c7ff9.firebaseapp.com",
    projectId: "pwa-pushnotification-c7ff9",
    storageBucket: "pwa-pushnotification-c7ff9.appspot.com",
    messagingSenderId: "437468290028",
    appId: "1:437468290028:web:ecc6b914036bbed53ffec9"
  };


firebase.initializeApp(firebaseConfig);

firebase.messaging();