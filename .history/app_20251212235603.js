const {readFileSync,writeFileSync, readFile}=require('fs')
readFile('./content/frist.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const frist = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        console.log(err);
        return
    })
})
