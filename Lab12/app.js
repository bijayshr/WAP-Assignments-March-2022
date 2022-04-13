const express = require('express');
const path = require('path');
const open = require('open');
const app = express();

//THIS IS USED TO OPEN A DEFAULT PAGE
open(`http://localhost:${process.env.PORT}/home`);

//ROUTERS
const {productRouter} = require('./routes/products');
const {userRouter} = require('./routes/users');

//URL ENCODING
app.use(express.urlencoded({extended: false}));

//STATIC ASSETS
app.use(express.static(path.join(__dirname, 'public', 'assets')));

app.use(productRouter);
app.use(userRouter);

app.use('/go-user', (req, res, next)=>{
    res.redirect('/user');
});

app.use('/go-product', (req, res, next)=>{
    res.redirect('/product');
});

app.use('/home', (req, res, next)=>{
    console.debug('~~~~~~~~~ Welcome to Lab 12 Assignment ~~~~~~~~~~~');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

function clientErrorHandler(err, req, res, next){
    if(req.xhr){
        res.status(500).send({
            error: 'Something Went Wrong!'
        })
    }else{
        next(err);
    }
}

app.use(clientErrorHandler);

app.listen(process.env.PORT);
console.debug('Server listening on port ' + process.env.PORT);