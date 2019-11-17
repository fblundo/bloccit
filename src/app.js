require('dotenv').config()

const express = require("express");
const app = express();

const appConfig = require("./config/main-config.js");


const routeConfig = require("./config/route-config.js");

appConfig.init(app, express);
routeConfig.init(app);

console.log(process.env); //returns windows environment variables
console.log(process.env.API_KEY); //returns undefined


module.exports = app;
