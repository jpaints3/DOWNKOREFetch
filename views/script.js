const firebase = require('firebase/app').default;
require('firebase/functions');
require('firebase/storage');

const fileUrl = window.location.href + 'tokensPlusAuth.txt'; // provide file location

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {

        //<------------- Initialize Firebase Storage ------------->

        // access the text file with sensitive information
        console.log(t.split(/\n/));
        let tokenINFO = t.split(/\n/);

        // access firebase storage with this information
        let firebaseConfig = {
            apiKey: tokenINFO[1],
            authDomain: tokenINFO[3],
            databaseURL: tokenINFO[5],
            storageBucket: tokenINFO[9]
        };

        const app = firebase.initializeApp(firebaseConfig);
        var storage = firebase.storage();

        // create location references
        var storageRef = storage.ref();
        var videosRef = storageRef.child('videos');


        //<------------- Place User Files in Storage ------------->

        function sendFiles(videosRef, dancerName, inputFiles){
            let fileName = dancerName;
            let fileRef = videosRef.child(fileName);

            fileRef.put(inputFiles).then(() => {
                console.log('Uploaded a file!');
            });
        }

        let dancerName = document.getElementById('dancerName').value;
        let inputFiles = document.getElementById('inputFiles').files;
        document.getElementById('uploadBtn').addEventListener('click', sendFiles(videosRef, dancerName, inputFiles));
    });





