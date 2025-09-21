const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index')

// const {Airport, City} = require('./models/index');
// const { Model } = require("sequelize");
// const airport = require("./models/airport");

require('dotenv').config()
const setupAndStartServer = async() => {
    //create the express object
    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);


    // const PORT = 3000; //previously when the code was only in this file
    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);

        // console.log(city);
        // console.log(process.env);

        // const airports = await Airport.findAll({
        //     include: [{
        //         model: City
        //     }]
        // });
        // console.log(airports);

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
    });
}

setupAndStartServer();