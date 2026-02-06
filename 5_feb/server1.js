const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>){
    if(req.url ==='/'){
        fs.readFile('index.html','utf8',(err, htmlContent)=>{
            if(err){
                res.statusCode=500;
                res.end('Internal server error');
                return ;
            }
            res.setHeader('Content-Type','text/html');
            res.end(htmlcontent);
        })
    }
}