const NodeRsa = require('node-rsa');

var key = new NodeRsa({ b: 512 });

var publicKey = key.exportKey('public');
var privateKey = key.exportKey('private');

console.log(publicKey);
console.log(privateKey);
