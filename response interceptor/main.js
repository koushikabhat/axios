const api = require('./api.js')


//for success
const testSuccess = async()=>{
    try
    {
        const data = await api.get("/posts/1");
        console.log("Data Received:", data);
    } 
    catch (err) 
    {
        console.log(" Error:", err);
    }
}


//for 404 
async function testNotFound() {
    try 
    {
      const data = await api.get("/invalid-endpoint");
    } catch (err)
    {
      console.log(" 404 Error:", err);
    }
}


//for 401 
async function testUnauthorized() {
    try 
    {
      await api.get("https://httpstat.us/401");
    }
    catch (err) 
    {
      console.log("📌 401 Error:", err);
    }
}

// testSuccess();
testNotFound();
// testUnauthorized();