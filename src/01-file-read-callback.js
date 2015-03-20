var fs = require('fs');

fs.readFile(__dirname + '/somefile.txt', function(err, contents) {
  if (err) return console.error(err.message);
  return console.log(contents.toString());
});
