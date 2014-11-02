# spawny [![Build Status](https://secure.travis-ci.org/danielchatfield/node-spawny.png?branch=master)](http://travis-ci.org/danielchatfield/node-spawny)

A small wrapper around child_process.spawn with some helpful features.

## Getting Started
Install the module with: `npm install spawny`

```javascript
var spawny = require('spawny');
spawny('npm version patch', true, cb);
```

## Usage

### spawny(command, useCmdify, callback)

#### Arguments

 * __command__ - The command that you would type into the terminal
 * __useCmdify__ - whether `cmdify` should be called on the command (required for some scripts to work on windows). Defaults to false.
 * callback - the callback to be called when the process terminates

## Features

 * Pipes stdio into child process
 * Simplifies API (at cost of flexibility)


## License
Copyright (c) 2013 Daniel Chatfield. Licensed under the MIT license.
