# node & npm

## .. or "the JavaScript explosion!"

---


# Who am I?

### Seth Etter

* Developer from Wichita, KS
* Works for BalancedComp
* Organizes devICT (Wichita dev community)
* Loves JavaScript and OSS

----

# Background

* Started w/ front-end web
* Learned to hate browsers
* Found refuge in the back end

---



![node logo](https://cldup.com/GyrXJ3FQ2f.png)

----

## Created by Ryan Dahl

* Available for linux in 2009
* Now in the hands of Joyent (his employer)

----

## JavaScript on the server

* Google's V8 engine (supa fast)
* Core modules for general purpose programming

----

## Non-blocking I/O

* Single threaded
* Event driven
* Scales wonderfully

----

## Motivation

* Web became super important
* Stuck with JavaScript in the browser
* One language for the whole stack!

---



# What's it used for?

----

* Web apps & services
* Desktop applications
* Mobile applications
* Internet of things
* Network tools
* System tools
* Robots?!

----

## Node bots!

![Nodebots](https://cldup.com/RjNBP8oRZx.png)

http://nodebots.io

https://github.com/rwaldron/johnny-five

----

# Want more?

https://github.com/joyent/node/wiki/projects,-applications,-and-companies-using-node

---



# How's it doing?

----


## Job growth

![node job growth](https://cldup.com/B-jBD_YmbR.png)

https://strongloop.com/wp-content/uploads/2015/02/final-node-infographic-3-18-15v1.pdf

----

## Invading the enterprise

Walmart, LinkedIn, PayPal, Dow Jones, eBay, GE, Alibaba, DirectTV, Symnatec,
Go Daddy, Microsoft, Uber, Yahoo, Google, Target, NBC, Best Buy, Wells Fargo

*..and more!*

---



# Node philosophies

----

* Keep it small and focused
* Prefer composition over extension
* Handle events and streams

_sound familiar?_

----

## Test coverage

* Core includes an `assert` library
* Other options available

---



# Node patterns

----

## Async all the things!

----

## Callbacks

```
var fs = require('fs');

fs.readFile(__dirname + '/somefile.txt', function(err, contents) {
  if (err) return console.error(err.message);
  return console.log(contents.toString());
});
```

* Other patterns (like Promises), exist

----

## Streams

```
var fs = require('fs');
var file = fs.createWriteStream(__dirname + '/output.txt');

process.stdin.pipe(file);
```

```
process.stdin.pipe(process.stdout);
```

----

## Events

```
var fs = require('fs');

var stream = fs.createReadStream('/dev/stdin');

stream.on('data', function(data) {
  console.log(data.toString().toUpperCase());
});
```

---



![npm logo](https://cldup.com/Rv0XHM7d2Q.png)

_Came around in 2011_

----

## Explosive growth

![Growth of npm](https://cldup.com/1fqrUhKUO5.png)

*~400% between 2013 and 2015*

http://www.modulecounts.com/

----

## node package manager, right?

> Contrary to the belief of many, "npm" is not in fact an abbreviation for "Node
Package Manager". It is a recursive bacronymic abbreviation for "npm is not an
acronym". (If it was "ninaa", then it would be an acronym, and thus incorrectly
named.)

https://docs.npmjs.com/misc/faq

---



# Using npm

----

## Installing a module

```
$ npm install express
```

Local by default

----

## Global?

```
$ npm install -g http-server
$ http-server
```

----

## Using a module

```
var express = require('express');
```

---



# Publishing your own modules!

----

# Register yourself

```
npm set init.author.name "Your Name"
npm set init.author.email "you@example.com"
npm set init.author.url "http://yourblog.com"

npm adduser
```

----

# Create your package

```
npm init
```

----

# What should we build?

### Leet speak converter!

----

... code ...

----

# Publish it!

```
npm publish ./
```

---


# Now what?

----

# BUILD THINGS!

---



# Resources

----

## Node school

http://nodeschool.io/

----

## Node weekly

http://nodeweekly.com/

----

## NodeUp Podcast

http://nodeup.com/

----

## Planet Node

http://www.planetnodejs.com/

----

## irc

freenode - #node.js

----

# NodeConf

http://nodeconf.com/
