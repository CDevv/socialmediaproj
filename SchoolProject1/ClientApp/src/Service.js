//require('dotenv').config();
const { env } = require('./conf.js');
const URL = 'https://redapi-15da.restdb.io/rest/posts';
const KEY = env.API_KEY;

export function getData() {
    return fetch(URL, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-apikey': KEY
        }
    })
        .then(response => response.json())
}

export function getPost(id) {
    return fetch(`${URL}/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-apikey': KEY
        }
    })
        .then(response => response.json())
}

export function addData(title, text, date) {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-apikey': KEY
        },
        body: JSON.stringify({
            title, text, date
        })
    })
        .then(response => response.json())
        .catch(e => console.log(e))
}