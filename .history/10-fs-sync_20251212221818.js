const {readFileSync,writeFileSync}=require('fs')
const frist=readFileSync('./content/frist.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log(frist,second);
writeFileSync('./content/result-sync.txt',
    `Here is the result:${frist},${second}`,
{flag:'a'})