# 🌐 Static Site using Node.js  🚀

This is a guide to create a static website using Node.js only, without using any framework. Node.js is a popular JavaScript runtime that allows us to easily create web applications and APIs.

## 🚀 Getting Started

### 1. 📁 Create a new directory for your project

The first step is to create a new directory for your project. You can name the directory whatever you want, but for this example, we'll use my-website:
```bash
mkdir my-website
cd my-website
```

### 2. 🆕 Initialize a new Node.js project

Next, we need to initialize a new Node.js project in our directory. This will create a package.json file that will keep track of our project's dependencies and settings:

```bash
npm init -y
# The -y flag tells NPM to accept the default options for the package.json file.
```



### 3. 📝 Create a new file called index.js and add the following code

```js
const http = require('http')
const fs = require('fs');
const path = require('path');
const app = (request, response) => {
    let filePath = path.join(__dirname, 'public', 'index.html');
    if (request.url !== '/') {
        filePath = path.join(__dirname, 'public', request.url);
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end('404 Not Found');
        }
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
```
This code  serves static files from the public directory, including HTML, CSS, and JavaScript. If a file is not found, it sends a 404 response. The content type of the file is set based on its extension.

We also set up the server to listen on port 3000. When you start the server, you should see a message in the console that says "🚀 Server listening on http://localhost:3000".

### 4. 📂 Create a new directory called public and add your static files
We need to create a new directory called public and add our static files to it. This is where we'll put all of our HTML, CSS, JavaScript, images, and other static files that we want to serve.

```bash
mkdir public && cd public && mkdir css js img && touch index.html about.html contact.html home.html css/styles.css js/main.js

# for windows
 mkdir public && cd public && mkdir css js img && type nul > index.html && type nul > about.html && type nul > contact.html && type nul > home.html && mkdir css && mkdir js && type nul > css\styles.css && type nul > js\main.js
```
### 5. 🚀 Start the server
Now, we can start the server by running the following command in the terminal:
```bash
node index.js
```
This will start the server and it should be accessible at http://localhost:3000 in your web browser.

### 6. 🌐 Open your browser and navigate to `http://localhost:3000` to see your static website

That's it! You should now be able to see your static website in your web browser at `http://localhost:3000`.

## 🎉 Conclusion
That's how you can create a simple static website using Node.js. From here, you can add more features to your website such as dynamic routes, APIs, and more.

