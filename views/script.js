import wixData from 'wix-data';
import {created, serverError} from 'wix-http-functions';
import fetch from 'wix-fetch';

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

sent = sendFiles(URL, DATA);
const info = await(wixData.insert('Team', sent));
