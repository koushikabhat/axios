const api = require('./api.js')

const getUser = async()=>{

    try{
        const resposne = await api.get("/user");
        console.log("The resposne is : ", resposne);
    }
    catch(error){
        console.log("Error",error);
    }
};

const postData = {
    title : "this is a title",
    body : "this is a body",
    userId : 1
};


const createPost = async()=>{
    try{
        const resposne = await api.post("/posts", postData);
        console.log("the resposne  is : ", resposne);
    }
    catch(error)
    {
        console.log("The error", error);
    }
}



getUser();
createPost();