//USING readFile

const fs = require('fs');

const server = require('http').createServer();

server.on('request', (request, response) => {
    fs.readFile('./panorama.jpg', (error, data)=>{
        if(error) throw error;
        response.end(data);
    })
});

server.listen(4002);