const express = require('express');
const path = require('path');

const options = {
    "caseSensitive": false,
    "strict": false
}

const router = express.Router(options);

router.get('/user', (
    req,
    res,
    next)=>{
    console.log('User Request Query: ', req.query);
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
})

router.post('/user', (
    req,
    res,
    next)=>{
    console.log('I am inside post of user. ... ');
    console.log()
});

module.exports.userRouter = router;
