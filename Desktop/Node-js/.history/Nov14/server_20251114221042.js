/*const http= require("http");
//console.log(http);
const server= http.createServer(function(req,res){
console.log("request received");
/*console.log(req);
console.log(res);

res.end();
res.write("Dadhabiin  koo galaafi wanta keessa darbuu guyyaa guyyaa ")
res.write("\nHello World");

res.end("\nOtuma mortuun mortuu hortuun horti")
});
server.listen(7897,function(){
    console.log("it is listening");
})
console.log("server is running on port 7897");*/
const http = require("http");
const server2 = http.createServer((req, res) => {
    console.log(req.url); // Added 'req.' before url
    if(req.url === "/"){
        res.write("<h1>This is home page</h1>")
        res.end();
    }
    else if(req.url === "/about"){
        res.write("<h1>This is about page</h1>")
        res.end();
    }
    else{
        res.write("<h1>page not found</h1>")
        res.end();
    }
});
server2.listen(6001, function(){
    console.log("it is listening");
})