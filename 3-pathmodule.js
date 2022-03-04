const path = require('path')

const basePath = path.basename('abc.txt')
console.log(basePath,'basePath')

const absolutePath = path.resolve(__dirname,'abc.txt')
console.log(path.resolve(__dirname,'abc.txt'))