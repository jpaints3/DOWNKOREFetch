const firebase = require('firebase/app');
require('firebase/firestore');

const fileUrl = window.location.href + 'tokensPlusAuth.txt'; // provide file location

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {
        console.log(t.split(/\n/));
        let tokenINFO = t.split(/\n/);

        let firebaseConfig = {
            apiKey: tokenINFO[2],
            authDomain: tokenINFO[4],
            databaseURL: tokenINFO[6],
            storageBucket: tokenINFO[10]
        };

        firebase.initializeApp(firebaseConfig);
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var videosRef = storageRef.child('videos');

        let file = null;
        let fileName = '';
        let fileRef = videosRef.child(fileName);

        fileRef.put(file).then(() => {
            console.log('Uploaded a file!');
        });


        /*document.getElementById('uploadBtn').onclick() = sendFiles(URL, DATA);  */
    });





