//Install express server
const express = require('express');
const path = require('path');

// Server will load anything in .env to an enviromnent variable
require ('dotenv').config()
console.log(process.env)

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/digital-anna'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/digital-anna/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);