const express = require('express');
const bookRouter = require('./routes/book');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', cors(), bookRouter);

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});


app.listen(process.env.PORT, () => console.log('listening to %s...', process.env.PORT));