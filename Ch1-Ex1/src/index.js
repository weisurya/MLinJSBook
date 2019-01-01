const greeting = require('./greeting');

console.log(greeting(process.argv[2] || 'World'));