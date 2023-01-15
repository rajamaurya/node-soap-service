const express = require('express');
const axios = require('axios');
const RemoteAPI = require('../Remote/ramote-apis');

const router = express.Router();

router.post('/multiply', (req,res)=>{
    console.log(req.body)
    let {intA,intB} = req.body;
    RemoteAPI.multiply(intA,intB);
})

module.exports  = router;
