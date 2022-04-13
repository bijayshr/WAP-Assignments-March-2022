const express = require('express');
const booksRouter = require('./routes/books');

const app = express();

app.use(express.json());
app.use('/books', booksRouter);

app.use((req,
         res,
         next)=>{
    res.status(404).json({error: req.url + ' API not supported!'});
})

app.use((err,
         req,
         res,
         next)=>{
    if(err.message === 'NOT Found'){
        res.status(404).json({error: err.message});
    }else{
        res.status(500).json({error: 'Something is wrong! Try later'});
    }
})

app.listen(process.env.PORT, ()=>{
    console.log('Listening to port %s', process.env.PORT);
})