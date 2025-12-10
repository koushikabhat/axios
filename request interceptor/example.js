const api = require('./apiClient.js')

const fetchPost = async()=>{
    try{
        const response = await api.get('/posts');
        // console.log("the resposne is : ", response.data);
        if(response.data){
            console.log("Success data");
        }
    }
    catch(error)
    {
        console.log("the error is : ", error);
    }  
}

fetchPost();