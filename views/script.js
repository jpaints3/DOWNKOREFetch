const firebase = require('firebase/app');
require('firebase/firestore');


let tokenINFO = '';
APIKey = '';
AUTHDomain = '';
PROJECTId = '';

const fileUrl = window.location.href + 'tokensPlusAuth.txt'; // provide file location

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {
        console.log(t.split(/\n/));
        let tokenINFO = t.split(/\n/);
        APIKey = tokenINFO[1];
        AUTHDomain = tokenINFO[3];
        PROJECTId = tokenINFO[5];

        /*/ Initialize Cloud Firestore through Firebase
        firebase.initializeApp({
            apiKey: APIKey,
            authDomain: AUTHDomain,
            projectId: PROJECTId
        });

        var db = firebase.firestore();

        async function sendFiles(URL, DATA) {
            await fetch(URL, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(DATA)
            })
            return response.json();
        }

        document.getElementById('uploadBtn').onclick() = sendFiles(URL, DATA); */
    });





