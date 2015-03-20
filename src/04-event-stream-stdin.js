var fs = require('fs');

var stream = fs.createReadStream('/dev/stdin');

stream.on('data', function(data) {
  console.log(data.toString().toUpperCase());
});
