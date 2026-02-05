import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// get __filename and __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "message.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");
        } else {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        }
    });
});

// start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
server.listen(300,()=>{
    console.log("server is running on port 3000");
});