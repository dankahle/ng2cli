'use strict';

let router = require('express').Router(),
  _ = require('lodash');

let heroes = [
  {"id": 1, "name": "Windstorm"},
  {"id": 2, "name": "Bombasto"},
  {"id": 3, "name": "Magneta"},
  {"id": 4, "name": "Tornado"}
];


router.get('/', (req, res) => {
  res.json(heroes);
});

router.post('/', (req, res) => {
  let hero = {
    id: heroes.length + 1,
    name: req.body.name
  };
  heroes.push(hero);
  res.send(hero);
});

router.put('/:id', (req, res) => {
  _.remove(heroes, hero => hero.id === parseInt(req.params.id));
  heroes.push(req.body);
  res.send(req.body);
});

router.delete('/:id', (req, res) => {
  let count = _.remove(heroes, hero => hero.id === parseInt(req.params.id));
  res.send(count);
});

module.exports = router;
