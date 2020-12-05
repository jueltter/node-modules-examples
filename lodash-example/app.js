console.log('Starting lodash-example\\app.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Stalin'));

var filteredArray = _.uniq(['manzana', 1, 2, 1, 2, 'manzana', 'naranja', 'naranja', 'limón']);
console.log(filteredArray);