importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBxCamfT2dsD6ILUOa0675epMiRbcpnjNY',
    authDomain: 'pwapush-36d1e.firebaseapp.com',
    databaseURL: 'https://pwapush-36d1e-default-rtdb.firebaseio.com',
    projectId: 'pwapush-36d1e',
    storageBucket: 'pwapush-36d1e.appspot.com',
    messagingSenderId: '593341550473',
    appId: '1:593341550473:web:0063b943274951eda3db58',
    measurementId: 'G-YM41CSBSV8',
});

const messaging = firebase.messaging();
