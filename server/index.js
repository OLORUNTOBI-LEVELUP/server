const http = require("http"); 
const express = require('express');
const app = express();
const path = require('path');
const externalRequest = require("../middleware/external");
const port = process.env.PORT || 5000;


const server = http.createServer(app);



//production mode
if(process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '../public')));
} else {
    app.use(express.static(path.join(__dirname, '../build')));
}
//build mode
app.get('/', (req, res) => {
    if(process.env.NODE_ENV !== 'production'){
  res.sendFile(path.join(__dirname, '../public/index.html'));
}else {
    res.sendFile(path.join(__dirname, '../build/index.html'));  
}
})

app.get("/holidays", externalRequest);

//start server
server.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})