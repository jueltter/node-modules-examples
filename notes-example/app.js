console.log('Starting notes-example\\app.js');
const notes = require('./notes.js');

console.log(`You are ${notes.age}`);

var res = notes.addNote();
console.log(res);

console.log('Results: ', notes.add(2, 3));