const api = 'https://api.github.com/rate_limit';

fetch(api)
    .then(resp => {
        if(!resp.ok) {
            throw new Error(`Unable to access endpoint: ${resp.status}, ${resp.statusText}`)
        }

        return resp.json();
    })
    .catch(err => {
        console.log(err);
    })