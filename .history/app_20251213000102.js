const {readFileSync,writeFileSync, readFile, writeFile}=require('fs')
readFile('./content/frist.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const frist = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        console.log(err);
        return
    }
const frist = result;
writeFile('/content/result/result-async.txt'))
`Here is the result: ${frist},${second}`
,(err,result)=>{
    if(err){
        return
    }
    console.log(result);
}
})
