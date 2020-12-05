console.log('Starting fs-example\\app.js');
const fs = require('fs');

fs.appendFile('greetings.txt','Hello world!\n', function (err) {
    if (err){
        console.log('Unable to write to file');
    }
});