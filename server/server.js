const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5000;

//all of these the same as similar express.use 

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
//this is stating how we built the site, interpret it
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
//all routes go through here first, call gallery which is actually gallery.router.js
//this calls express: manages the routes, allows us to speak between client and server(node)
app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});

//node is the server (npm start server - node activate/come online), node creates an internet within my computer (localhost)