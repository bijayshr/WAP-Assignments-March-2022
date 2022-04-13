const express = require('express');
const path = require('path');

const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);

router.get('/product',
    (
        req,
        res,
        next) =>{
        console.log('Product Request Query: ', req.query);
        res.sendFile(path.join(__dirname, '..', 'views', 'addProduct.html'));
    });

router.post('/product',
    (        req,
        res,
        next)=>{
        console.log('I am posting')
    });

module.exports.productRouter = router;