const fs = require('fs')

console.log('compelted first task')

fs.readFile('./content/abc.txt','utf8',(err,result)=>{
  if(err){
      console.log(err)
      return
  }else{
      console.log(result)
      console.log('compelted finish task')
  }  
})
console.log('compelted next task')
