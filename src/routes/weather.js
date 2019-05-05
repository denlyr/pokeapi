const express = require('express');
const rout = express.Router();

rout.get('/getWeather', (req, res)=>{
    res.send("ok");
})

module.exports = rout;