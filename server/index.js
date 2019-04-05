const http = require("http"); 
const express = require('express');
const app = express();
const path = require('path');
const axios = require("axios");
const port = process.env.PORT || 5000;


const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//production mode/dev mode
if(process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '../public')));
} else {
    app.use(express.static(path.join(__dirname, '../build')));
}

app.get('/', (req, res) => {
    if(process.env.NODE_ENV !== 'production'){
  res.sendFile(path.join(__dirname, '../public/index.html'));
}else {
    res.sendFile(path.join(__dirname, '../build/index.html'));  
}
})

app.get("/holidays", (req, res) => {
        const BASE_URL = "https://holidayapi.com/v1/holidays"
        const params = {
            country: 'NG',
            key: 'e5e5e2b5-4e38-4e87-955d-3bad3a34aaf2',
            day: '01',
            month: '01',
            year: '2019'

        }
        axios.get(BASE_URL, { params })
            .then(response => {
                    res.json(response.data);
            }, error => {
                res.status(400)
                res.json({message: error.message})
            })
});

//start server
server.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})