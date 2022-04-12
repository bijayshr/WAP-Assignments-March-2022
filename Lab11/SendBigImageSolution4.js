//USING readFile ALTERNATIVELY
const fs = require('fs');
const http = require('http');

http.createServer((req, res)=>{
    fs.readFile('./panorama.jpg', (err, data)=>{
        if(err) throw err;
        res.end(data);
    })
}).listen(3000, ()=>console.log('Listening to 3000'));