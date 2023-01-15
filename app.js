const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const postApiRouter = require('./soap-apis/post_apis');

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get("/",(req,res)=>{
    res.send("Soap Services are running!");
})
app.use("/api", postApiRouter);



app.listen(3000, (req, res)=>{
    console.log("app is running on port 3000");
})