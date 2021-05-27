const firebase = require('firebase/app');
require('firebase/firestore');

const fileUrl = window.location.href + 'tokensPlusAuth.txt'; // provide file location

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {

        //<------------- Initialize Firestore Storage ------------->

        // access the text file with sensitive information
        console.log(t.split(/\n/));
        let tokenINFO = t.split(/\n/);

        // access firebase storage with this information
        let firebaseConfig = {
            apiKey: tokenINFO[2],
            authDomain: tokenINFO[4],
            databaseURL: tokenINFO[6],
            storageBucket: tokenINFO[10]
        };

        firebase.initializeApp(firebaseConfig);
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
        document.getElementById('uploadBtn').onclick() = sendFiles(videosRef, dancerName, inputFiles);

    });





