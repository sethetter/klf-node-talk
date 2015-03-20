var leet = require('./leet-speak');
var Writable = require('stream').Writable;
var util = require('util');

module.exports = LeetStream;

util.inherits(LeetStream, Writable);

function LeetStream(options) {
  Writable.call(options);
  this.result = '';
}

LeetStream.prototype._write = function(chunk, encoding, cb) {
  this.result += leet(chunk);
  cb();
};

LeetStream.prototype.end = function() {
  this.emit('result', this.result);
};
