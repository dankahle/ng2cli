'use strict';

let _ = require('lodash');

var arr = [
  { id: 1, name: 'Windstorm' },
  { id: 2, name: 'Bombasto' },
  { id: 3, name: 'Magneta' },
  { id: 4, name: 'Tornado' }
];

console.log(arr);
_.remove(arr, {id: 2});
console.log(arr);

