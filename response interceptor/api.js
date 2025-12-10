const axios = require('axios')

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    timeout: 5000
});




//request interceptor 
// api.interceptor.request.use((config)=>{}, (error)=>{})




//api resposne interceptor
api.interceptors.response.use(
    (response)=>{
        console.log("✅ SUCCESS:", response.config.url);
        return response.data;
    },

    (error)=>{
        // console.log("Error is ", error);
        console.log("Error Resposne is : ", error?.response); 

        const status = error?.response?.status;
        const url = error?.config?.url;

        let errorMessage = "Something went wrong";

        switch(status)
        {
            case 400: 
                errorMessage = "Bad Request — your request is invalid.";
                break;
                
            case 401 : 
                errorMessage = "Unauthorized — Token expired or missing.";
                // This is where refresh-token OR logout logic happens
                console.log(" Token expired → redirecting or refreshing...");
                break;
               
            case 403 :
                errorMessage = "Forbidden — You do not have access.";
                break;
            
            case 404:
                errorMessage = `Resource Not Found — ${url}`;
                break;

            case 500:
                errorMessage = "Server Error — Try again later.";
                break;

            default:
                errorMessage = error.response?.data?.message || "Unknown error";
        }


        //returning a clean readable error object 
        return Promise.reject({
            status,
            message: errorMessage,
        });

    }
)

module.exports = api;


