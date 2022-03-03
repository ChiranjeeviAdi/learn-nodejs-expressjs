console.log('welcome')

const {readFile , writeFile} = require('fs')
//const {readFile , writeFile} = require('fs').promises() // directly we can use same as readFile,writeFile

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePrimise = util.promisify(writeFile)




const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,result)=>{
            if(err){
                // console.log(err)
                reject(err)
                return;
            }
            else
                resolve(result)
        })
    })
}

/*
Promise consuming the producer code after the return
const first = getText('./content/abc.txt').then(function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})
*/

//By this we face again the callback hell when we need to call multiple file after first file execition 
// so lets introduce asycn await

const start = async() =>{
    try{

        // const first = await getText('./content/abc.txt')
        // const second = await getText('./content/xyz.txt')

        const first = await readFilePromise('./content/abc.txt','utf8');
        const second = await readFilePromise('./content/xyz.txt','utf8');

        await writeFilePrimise('./content/abcxyz.txt',"\n"+(first+second),{flag:'a'})
        console.log(first,second)
    }catch(error){
        console.log(error,'catch error')
    }
}

start()