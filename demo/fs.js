const fs = require("fs");
const path = require("path");

// .mkdir - method than created folder (test)
// fs.mkdir(path.join(__dirname, "test"), err => { //test- name folder // err => - strelochnaja function gde 1 parametr: err === callback function, when 1 paramater = err(it's rule!)
//   if (err) {                                      // err => {expression}   ===  function(err) {expression;}
//     throw err;      // promise - learn.js
//   }

//   console.log("Created folder");
// });



const filePath = path.join(__dirname, 'test', 'text.txt')

// // .writeFile - method than created file (test.txt) , umeet perezapisyvat faily owibku ne daet kak mkdir
// fs.writeFile(filePath, 'Hello NodeJS!', err =>{
//     if(err) {
//         throw err;
//     }

//     console.log('File');
// })

// fs.appendFile(filePath, '\nHello Add!', err =>{ //dobovljat dannye
//   if(err) {
//       throw err;
//   }

//   console.log('File');
// })

// kak chitat files

fs.readFile(filePath, 'utf-8', (err, content) => { //esli >1 paramtra to v skobkah
    if (err) {
        throw err
    }
    console.log('Content:', content);
    // const data = Buffer.from(content)                    // 1st varinat bolee slozny esli ne ispolzovat 'utf-8'
    // console.log('Content: ', data.toString());
})
