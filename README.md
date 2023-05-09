# 🌐 Static Site using Node.js and Express 🚀

This is a guide to create a static website using Node.js and Express. Express is a popular Node.js framework that allows us to easily create web applications and APIs.

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
### 3. 📥 Install Express
Now, we need to install Express. We can do this using NPM:

```bash
npm install express --save
# The --save flag tells NPM to save the dependency in the package.json file.
```
### 4. 📝 Create a new file called index.js and add the following code
We'll create a new file called index.js and add the following code to it:

```js
const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server listening on http://localhost:3000');
});
```
This code creates a new Express application and sets up a middleware to serve static files from the public directory. We're telling Express to serve all static files from the public directory, including HTML, CSS, JavaScript, images, etc.

We also set up the server to listen on port 3000. When you start the server, you should see a message in the console that says "🚀 Server listening on http://localhost:3000".

### 5. 📂 Create a new directory called public and add your static files
We need to create a new directory called public and add our static files to it. This is where we'll put all of our HTML, CSS, JavaScript, images, and other static files that we want to serve.

```bash
mkdir public && cd public && mkdir css js img && touch index.html about.html contact.html home.html css/styles.css js/main.js

# for windows
 mkdir public && cd public && mkdir css js img && type nul > index.html && type nul > about.html && type nul > contact.html && type nul > home.html && mkdir css && mkdir js && type nul > css\styles.css && type nul > js\main.js

```

### 6. 🚀 Start the server
Now, we can start the server by running the following command in the terminal:

```bash
node index.js
```
This will start the server and it should be accessible at http://localhost:3000 in your web browser.

### 7. 🌐 Open your browser and navigate to `http://localhost:3000` to see your static website

That's it! You should now be able to see your static website in your web browser at `http://localhost:3000`.

## 🎉 Conclusion

That's how you can create a simple static website using Node.js and Express. From here, you can add more features to your website such as dynamic routes, APIs, and more.


