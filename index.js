const http = require("http");
const myServer = http.createServer((req, res)=>{
    console.log(req.headers);
    res.end("Hi from the server");
});

myServer.listen(3001 , ()=>{
    console.log("Server started at 3001");

})