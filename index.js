// runtime - work in realtime, when program start
// 1. set up nodeJS in nodejs.org
// 2. set up npm - node package manager (менеджер пакетов, входящий в состав Node.js)
// in terminal: node index.js - triger index js
// in terminal: npm init - Initialization your project => get file: package.json
// in terminal: npm i nodemon -D (i = install; -D = location for Development)

// "dependencies": {                   // spisok zavisimoste mozno vse udalit ostavot tolko fila package.json -
//     "chalk": "^4.0.0"               // v terminale vvest: npm i - i vse poluchit - autorezim
//   },
//   "devDependencies": {
//     "nodemon": "^2.0.4"
//   }

// module.exports - export module in ixternel file(v nawem sluchaje data.js)

const chalk = require('chalk'); //requier - function kotorja pokluchaet paket naprimer 'chalk'
const text = require('./data.js');; // - ixternal files (otnositelnya put cheres ./)

console.log("hi NodeJS");
console.log(chalk.red("hi NodeJS"));
console.log(chalk.blue(text));

// who is work functiron: require, exports, module and 2 system variables: __dirname, _filename 
// __dirname: pokazyvaet papku v kotoj my vedem raboty
// : takze absolute path + nazvanie fijla
console.log(__dirname);
console.log(__filename);

// function (exports) {
//     console.log("who is work function");
// }

// no function propisyvat nenado eto rabotaet po umolchanije

///// v nodeJS sushectvuju dop. svoi moduli:

// const path = require('path'); => v file path.js - eto vstroenyj modul JS on dostupen vsegda, ego nenado podgruzat.

// in file path.js: methods: = it is MODULE PATH (read documantion)
// basename = name file
// dirname = absolute path
// extname = raswirenie(extension) by file
// parse = parse(more data)
// join = poluchit stroku soderzashuju korektnyj put'

// in file fs.js: methods: = it is MODULE FS - file system === comments show in file fs.js

