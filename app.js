// Require the Express npm Package
const express = require('express')

// Express App 
// Creating our server named app
const app = express();

// Make everything inside public available
app.use(express.static('public'));

// Route 
// HTTP Verbs:
// Get - get information
// Post - Post new information
// Delete - Delete information
// Put - Update information

// Creating a 'Get' Route
app.get('/home', (request, response, next)=>{
    response.sendFile(__dirname + '/views/home.html')
});

// Create Routes
app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html');
})
app.get('/photo-galery', (request, response)=>{
    response.sendFile(__dirname + '/views/photo-galery.html');
})
app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works.html');
})

// Start the Server
app.listen(3000, ()=> console.log('App is listening on PORT 3000'));