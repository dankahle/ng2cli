'use strict';


let express = require('express'),
  port = 4201,
  bodyParser = require('body-parser'),
  routerHero = require('./routerHero'),
  app = express();


app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  if(req.headers['access-control-request-headers'])
    res.setHeader("Access-Control-Allow-Headers", req.headers['access-control-request-headers']);
  if ('OPTIONS' == req.method)
    res.send(200);
  else
    next();
})

app.use(bodyParser.json());

app.use((req, url, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
})

app.use('/api/hero', routerHero)

app.listen(port, () => console.log(`listening on port ${port}`));
