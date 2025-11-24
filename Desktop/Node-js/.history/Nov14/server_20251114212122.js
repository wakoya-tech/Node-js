const http= require("http");
//console.log(http);
const server= http.createServer(function(req,res){
//console.log("request received");
console.log(req);
console.log(res);
res.write("Hello World");
res.end();
//res.end("Otuma mortuun mortuu hortuun horti")
});
server.listen(7897,function(){
    console.log("it is listening");
})