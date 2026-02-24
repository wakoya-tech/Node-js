const http = require('http')
const {readFileSync}= require('fs')
const homepage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/styles.css')
const homeImage=readFileSync('./navbar-app/logo.jpg')
const homeLogic=readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req,res)=>{
// console.log(req.method);
console.log(req.url);
if(req.url === '/'){
res.writeHead(200,{'content-type':'text/html'})
res.write(homepage)
res.end()   
}
else if (req.url === '/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()  
}
else if (req.url === '/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()  
}
else if (req.url === '/logo.jpg'){
    res.writeHead(200,{'content-type':'image/jpg+xml'})
    res.write(homeImage)
    res.end()  
}
else if (req.url === '/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()  
}
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page Not Found</h1>')
    res.end() 
}

})
server.listen(5000)