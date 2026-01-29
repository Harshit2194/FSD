const http = require("http");
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","test/plain");
    res.end("Welcome to the Node.js Tutorial");
});

server.listen(3000,() =>{
    console.log(
        "Server is running on http://localhost:3000");
});