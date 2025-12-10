const axios = require('axios');


const api  = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    timeout : 5000
})



//api.interceptors.request.use(()={}, ()=>{})

api.interceptors.request.use((config)=>{
    // console.log("configure is :", config);

    //adding custom headers in config 
    config.headers["X-App-version"] = 1.1;
    config.headers["X-lang"] = "en";


    //adding auth token in headers
    config.headers["Authorization"] = "Bearer dummy_token_value";

    //adding Content-Type header
    config.headers["Content-Type"] = "application/json";

    // console.log("headers :  ",config?.headers)
    // console.log("token is : ", config?.headers?.Authorization)
    // console.log("the header[0] : ",config.headers[1])
    // console.log("baseUrl : ", config.baseURL) 
    // console.log("Url is : ",config.url)


    return config;
}, 
(error)=>{
    console.log("the error is : ", error);
    return error;
})


module.exports = api;