const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res) => {

    // Serve frontend
    if (req.method === 'GET') {
        let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);

        const ext = path.extname(filePath);
        let contentType = 'text/html';
        if (ext === '.jsx') contentType = 'text/javascript';

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    }

    // POST
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = JSON.parse(body);

            console.log("Received:", data);

            // 🔥 Send back same data
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                name: data.email,
                password: data.password
            }));
        });
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});