const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) =>{
   const src = fs.createReadStream('./panorama.jpg');
   src.pipe(res);
});

server.listen(4000, ()=> console.log("Listening on port: 4000"));