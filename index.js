const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res)=>{
    if (req.url === "/favicon.ico" && req.url === "/firebase-messaging-sw.js")
      return res.end();
    const log = `${Date.now()}: ${req.url} New request found \n`
     fs.appendFile("./log.txt",log,(err,data)=>{
        switch(req.url){
            case "/" :res.end("Home page")
            break;
            case "/about" :res.end("About page");
        }
    // res.end("Hi from the server");
     })
});

myServer.listen(3001 , ()=>{
    console.log("Server started at 3001");

})