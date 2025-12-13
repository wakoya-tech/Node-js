const {readFileSync,writeFileSync, readFile}=require('fs')
readFile('./content/frist.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})
