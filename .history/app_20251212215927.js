const {readFileSync,writeFileSync}=require('fs')
const frist=readFileSync('./content/frist.txt','utf8');
const second=readFileSync('./content/frist.txt','utf8');
console.log(frist,second);