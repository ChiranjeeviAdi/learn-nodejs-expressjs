//Async
const { readFile , writeFile } = require('fs') 

//function callback hell
console.log('start')
readFile('./content/abc.txt','utf8',(err,result)=>{
    // console.log(err,result)
    if(err){
        console.log(err)
        return;
    }else{
        const first = result
        
        readFile('./content/xyz.txt','utf8',(err,result)=>{
            // console.log(err,result)
            if(err){
                console.log(err)
                return;
            }else{
                const second = result
                writeFile('./content/abcxyz.txt',"\n"+(first+second),{flag:'a'},(err,result)=>{
                    console.log(err,result)
                    console.log('done writing')
                })

            }
        })
    }
})
console.log('end')


//To avoid callback hells we go with async await or promises