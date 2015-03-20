var fs = require('fs');

var file = fs.createWriteStream(__dirname + '/output.txt');

process.stdin.pipe(file);
