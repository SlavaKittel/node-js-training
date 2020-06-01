const path = require('path');

console.log('Name file:', path.basename(__filename));
console.log('Name directory:', path.dirname(__filename));
console.log('Extension file', path.extname(__filename));
console.log('Parse:', path.parse(__filename));
console.log('Parse:', path.parse(__filename).name); // mozno poluchit chtoto otdelno
console.log(path.join(__dirname, 'server', 'index.html')); // work with path(example) - server = folder 