#!/usr/bin/env node

var leet = require('./leet-speak');
var through = require('through');

process.stdin.pipe(through(function(data) {
  this.emit('data', leet(data.toString()));
})).pipe(process.stdout);
