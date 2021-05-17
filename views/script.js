const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

async function sendFiles(URL, DATA){
    await fetch(URL, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body':JSON.stringify(DATA)
    })
    return response.json();
}

document.getElementById('uploadBtn').onclick() = sendFiles(URL, DATA);

