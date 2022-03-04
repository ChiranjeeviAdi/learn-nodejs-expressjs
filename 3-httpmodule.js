const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("hello welcome to home page")

    }
    else if(req.url==='/about'){
        res.end('about')
    }else{
        res.end(`
        <h1>Page not found</h1>`
     );
    }
   
})
server.listen(3001) //listen  = asynchronous