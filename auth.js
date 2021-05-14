//authentication header 
function createAuthHeader(){
    let authURLendpoint = 'https://www.wix.com/oauth/access';
    const headers = {
        'Content-Type': 'application/json',
        'grant_type': 'authorization_code',
        'client_id': '<APP_ID>',
        'client_secret': '<APP_SECRET>',
        'code': '<AUTH_CODE>'
    }

}

