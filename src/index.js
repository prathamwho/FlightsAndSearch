const express = require("express");
const {PORT} = require('./config/serverConfig');
require('dotenv').config()
const setupAndStartServer = async() => {
    //create the express object
    const app = express();
    // const PORT = 3000; //previously when the code was only in this file
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
    })
}

setupAndStartServer();