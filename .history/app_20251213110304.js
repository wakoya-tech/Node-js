const http = require('http');
const server= http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Welcome to our home page')
   }
    if(req.end('Here is our short history'))
})
server.listen(5000)

