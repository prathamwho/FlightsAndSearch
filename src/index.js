const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig');

require('dotenv').config()
const setupAndStartServer = async() => {
    //create the express object
    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    // const PORT = 3000; //previously when the code was only in this file
    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(city);
        // console.log(process.env);
    });
}

setupAndStartServer();