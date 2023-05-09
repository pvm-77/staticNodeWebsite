const http = require('http')
const fs = require('fs');
const path = require('path');

const app = (request, response) => {
    // Serve the index.html file by default
    let filePath = path.join(__dirname, 'public', 'index.html');
    // If the requested URL is not the root, serve the requested file instead
    if (request.url !== '/') {
        filePath = path.join(__dirname, 'public', request.url);
    }
    // Read the requested file from the filesystem
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If the file cannot be read, return a 404 error
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end('404 Not Found');
        }

        // Return the file contents with the correct content type
        let contentType = 'text/html';
        if (filePath.endsWith('.css')) {
            contentType = 'text/css';
        } else if (filePath.endsWith('.js')) {
            contentType = 'text/javascript';
        }
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data);
    });

}
const server = http.createServer(app)
server.listen(3000, () => {
    console.log('🚀 Server listening on http://localhost:3000');
})





