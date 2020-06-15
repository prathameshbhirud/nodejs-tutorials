var myLogModule = require('./utility/log.js');

myLogModule.info('Node.js started');

var exportLiteral = require('./message.js');
console.log(exportLiteral);