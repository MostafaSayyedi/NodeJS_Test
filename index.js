//const hello = "Hello World!";
//console.log(hello);




//const txtOut = `this is txt for writing: ${txtIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/txtOut.txt',txtOut);
//console.log('File Writed');
//Blocking
// const fs= require('fs');
// const readfile = fs.readFileSync('./txt/txtIn.txt', 'utf-8');
// console.log(readfile);
// const writefile = (`this is for writing in file: ${readfile}.\nCreatedOn: ${Date.now()}`);
// fs.writeFileSync('./txt/txtOut.txt',writefile);
// console.log('writefile');



//Non-blocking
const fs = require ('fs');
fs.readFile('./txt/txtIn.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/appendix.txt', 'utf-8', (err, data3) => {
            console.log(data3);
        });
    });
});
console.log('Will read file');
