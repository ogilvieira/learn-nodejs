// request fs(file system) node module
var file = require('fs');
var path = './txt/strogonoff.txt';

file.exists(path, function(result){
	if(!result){
		file.writeFile(path, 'Carne\nMolho\nCreme de Leite\nChampignon\nMilho\nPimenta\n', function(err) {
		    if (err) throw err;
		    console.log("It\'s saved!");
		});
	} else {
		file.readFile(path, function(err, data) {
		    if (err) throw err;
		    console.log(data.toString());
		});
	}
});
