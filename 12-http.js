    const http = require('http');
    const server= http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Welcome to our home page')
     }
    if(req.url === '/about')
        {
     req.end('Here is our short history')
        }
        res.end(`<h1>Oops!</h1>
        <p>we can't seem to find the page you are looking for</p>
       <a href="/">back home</a>`)
    })
server.listen(5000)
/////////////////////////////
const _= require('lodash');
const items=[1,[2,[3,[4]]]];

const newItems=_.flattenDeep(items);
const sum=_.sum(items)
console.log(newItems);
console.log(sum);
console.log('hello people');
console.log('wako');
const x=10;
const y=14;
const result =x+y;
console.log(result);
console.log('frist');
setTimeout(()=>{
    console.log('second task');
},2000)
console.log('next task');
