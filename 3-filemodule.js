const { readFileSync , writeFileSync } = require('fs') 
//Sync

const abc = readFileSync('./content/abc.txt','utf-8');
const xyz = readFileSync('./content/xyz.txt','utf-8')

writeFileSync('./content/abcxyz.txt',("\n"+abc+xyz),{flag:'a'})
console.log(abc,xyz)