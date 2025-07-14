const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New request found \n`
     fs.appendFile("./log.txt",log,(err,data)=>{
    res.end("Hi from the server");
     })
});

myServer.listen(3001 , ()=>{
    console.log("Server started at 3001");

})