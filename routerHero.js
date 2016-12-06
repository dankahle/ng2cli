'use strict';

let router = require('express').Router(),
  _ = require('lodash'),
  request = require('request');

let heroes = [
  {"id": 1, "name": "Windstorm"},
  {"id": 2, "name": "Bombasto"},
  {"id": 3, "name": "Magneta"},
  {"id": 4, "name": "Tornado"}
];
let count = 4;

router.get('/', (req, res, next) => {
/*
  var err = new Error();
  err.status = 400;
  err.message = 'something bad';
  next(err);
  return;
*/
  res.status(201).send({data: heroes});
});

router.post('/', (req, res) => {
  let hero = {
    id: ++count,
    name: req.body.name
  };
  heroes.push(hero);
  res.send({data: hero});
});

router.put('/:id', (req, res) => {
  _.remove(heroes, hero => hero.id === parseInt(req.params.id));
  heroes.push(req.body);
  res.send({data: req.body});
});

router.delete('/:id', (req, res) => {
  let count = _.remove(heroes, hero => hero.id === parseInt(req.params.id));
  res.send({data: count});
});

module.exports = router;
