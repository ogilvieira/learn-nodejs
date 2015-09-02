// request fs(file system) node module
var file = require('fs');

file.readFile('./txt/strogonoff.txt', function(err, data) {
    if (err) throw err;
    // show string with file content
    console.log(data.toString());
});

file.writeFile('./txt/hamburguer.txt', 'Bread, lettuce, tomato and sauce', function(err) {
    if (err) throw err;
    console.log("It\'s saved!");
});