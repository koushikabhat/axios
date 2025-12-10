const api = require('axios')

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    timeout : 5000
})

module.export = api;