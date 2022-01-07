let api = require('./api')

let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let app = express()

let port = process.env.PORT || 5000

app.use (function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept')
    next ()
});

// Body parser middleware
app.use (bodyParser.urlencoded({ extended: true }))
app.use (bodyParser.json())

// Get api
app.get('/api', api)

// Error handler
app.use (function (err, req, res, next) {
    console.error(err.stack)
    res.status(400).sens(err.message)
});

app.listen(port, function () {
    console.log('xlsxtojson_api listening on port ' + port)
});