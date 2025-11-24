//import abebe from './abebe.txt'
const os = require('os');
let totalMemo= os.totalmem();
let memo=os.freemem();
console.log("total Memory in GB",((totalMemo)/(1024*1024*1024)));
console.log("free Memory in GB",((memo)/(1024*1024*1024)));
console.log("used memory in GB",((totalMemo-memo)/(1024*1024*1024)));
console.log(os.arch());
//console.log('os');
/*const freeMemory = os.freemem();
console.log(freeMemory);
const platForm=os.platform();
console.log(platForm);
*/
/*
const fs = require('fs');
fs.readFile('./abebe.txt','utf8',(err,data)=>
{
    if(err){
        console.error(err)
        return
    }
    console.log(data);
})
const path = require("path");
console.log(path);
let pathObj = path.parse(__filename);
console.log(pathObj);
console.log(__filename);
console.log(__dirname);
*/
 const {readdir,mkdir,readFile,writeFile}=require('fs');
 
 readdir("./",(err,files)=>{
    if(err)console.log("error",err);
    else console.log(files);
 })
 
 mkdir("abebe.js",(err,path)=>{
    if(err)console.log("error",err);
console.log(path);
console.log(path);
const wangela= Yohn 3:16;
console.log(wangela);
})
readFile('./abebe.txt','utf8',(err,data)=>
    {
        if(err){
            console.error(err)
            return
        }
        console.log(data);
    })
writeFile("message.txt","Hello class",(err)=>{
if(err)throw err;
console.log("the file ha been saved");})
const events = require("events");
const eventEmitter= new events.EventEmitter();
const myEventHandler=function (){
    console.log("Abet, Selam nw");
};
eventEmitter.on("Abebe",myEventHandler);
eventEmitter.emit("Abebe")