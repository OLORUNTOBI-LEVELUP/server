const http = require("https");
const  externalRequest = (req, res) => {
    const url = "https://holidayapi.com/v1/holidays?key=e5e5e2b5-4e38-4e87-955d-3bad3a34aaf2&country=NG&year=2019&month=04&day=04&previous=true"

    http.get(url, (response) => {
        let body = '';
        response
         .on("data", (chunk) => {
             body += chunk.toString();
         })
         .on("end", () => {
             const parsed = JSON.parse(body);
             res.write(JSON.stringify(parsed));
             res.end();

         })
    })  
    
};

module.exports = externalRequest;