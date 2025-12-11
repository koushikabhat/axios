
let  token = null

module.exports = {
    setToken : (newtoken)=>{
        token = newtoken
    },
    
    getToken : ()=>{
        return token;
    },

    clearToken : ()=>{
        return null;
    }
}