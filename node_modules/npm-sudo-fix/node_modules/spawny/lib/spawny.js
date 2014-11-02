/*
 * spawny
 * https://github.com/danielchatfield/node-spawny
 *
 * Copyright (c) 2013 Daniel Chatfield
 * Licensed under the MIT license.
 */

'use strict';
var cmdify = require('cmdify');
var spawn = require('child_process').spawn;

module.exports = function spawny(command, useCmdify, cb) {
    useCmdify = useCmdify || false;
    cb = cb || function(){};

    var args = command.split(' ');
    command = args.shift();

    if (useCmdify) {
        command = cmdify(command);
    }

    var child = spawn(command, args, {stdio:'inherit'});
    child.on('close', cb);

    return child;
};