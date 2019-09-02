'use strict';

// ensure process is running on linux
if(process.platform !== 'linux') {
	throw new Error('linux-user must be running on Linux');
}

// ensure process is running as root
if(!(process.getuid && process.getuid() === 0)) {
	throw new Error('linux-user must be running as root user');
}

var lib = require('./lib/user');
lib.promises = require('./lib/promise')

module.exports = lib;
