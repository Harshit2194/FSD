// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","test/plain");
//     res.end("Welcome to the Node.js Tutorial");
// });

// server.listen(3000,() =>{
//     console.log(
//         "Server is running on http://localhost:3000");
// });
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("index.html"));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});