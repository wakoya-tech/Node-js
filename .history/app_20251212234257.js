const {readFileSync,writeFileSync, readFile}=require('fs')
readFile('./content/frist.txt',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})