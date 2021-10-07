var express = require('express')
var cors = require('cors')
var app = express()
const fetch = require('node-fetch');

app.use(cors())

app.get('/', function (req, res, next) {
    console.log('https://api.domainsdb.info/v1/domains/search?limit=10&domain="'+ req.query.domain+'"');

    fetch('https://api.domainsdb.info/v1/domains/search?limit=10&domain="'+ req.query.domain+'"')
    .then(response => response.json())
    .then(data =>  res.json(data));
 
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})