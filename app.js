var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
const path = require('path')

require("dotenv").config()

var app = express();

const corsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization', "auth-token"],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:3000',
    preflightContinue: false,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.static(__dirname + "/public"))

//mongodb connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))

mongoose.connection.on("connected", () => {
    console.log("connected successfully !!!")
})

mongoose.connection.on("error", () => {
    console.log("error")
})

//user api
const userRoute = require('./routes/user')
app.use(userRoute)

app.use(express.static("client/build"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 4000

app.listen(PORT)
console.log('server on')
