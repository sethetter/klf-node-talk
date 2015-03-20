var fs = require('fs');

var fileStream = fs.createReadStream(__dirname + '/somefile.txt');
var result = '';

fileStream.on('data', function(data) {
  result += data;
});

fileStream.on('end', function() {
  console.log(result);
});
