const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function (req, res){
    console.log('****************************  Fetching 5 MB of file ****************************')
    res.writeHead(200, {
        'Content-Type': 'image/jpeg'
    });
    let image = fs.readFileSync('./panorama.jpg');
    res.end(image, 'binary');
});

server.listen(4001, ()=> console.log("SendBigImageSolution2 listening on port 4001"));