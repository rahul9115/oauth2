const express = require('express');
const mongoose = require('mongoose');
const passportConfig = require('./services/passport');
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const authroutes = require('./routes/authenticate');
const keys = require("./keys/keys");
var cors = require('cors');
const stripes = require("./routes/billingroutes");
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(
    cookieSession({
        maxAge: 60 * 1000,
        keys: [keys.cookiekey]

    })
);
app.use(passport.initialize());
app.use(passport.session())
authroutes(app);
stripes(app);

const PORT = "0.0.0.0";
const host = "0.0.0.0";

app.listen(PORT, host, function () {
    console.log("Server Started",PORT);
});
