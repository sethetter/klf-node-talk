#!/usr/bin/env node

var LeetStream = require('./leet-stream');


process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data', leetStream);

leetStream.on('result', console.log);
