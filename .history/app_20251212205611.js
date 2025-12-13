/*const os =require('os')
const user=os.userInfo();

console.log(`The System uptime is ${os.uptime()}seconds`);
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);*/
const path=require('path');
console.log(path.sep);
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);