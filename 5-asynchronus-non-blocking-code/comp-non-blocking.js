var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fib.js'], {
    stdio : 'inherit'
});

console.log(2);