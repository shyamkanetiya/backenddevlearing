const a=19;
const b=10;
function addval(){
    console.log(`sum of two number is:${a+b}`);
}
addval();
const { log } = require('console');
const { readFile } = require('fs');
//os module details
const os=require('os')
const user=os.userInfo();
console.log(user);
const uptime=os.uptime;
console.log(`current systeam uptime is ${uptime} seconds`);
const currentos={
totalmem:os.totalmem(),
freemem:os.freemem(),
version:os.version()
}
console.log(currentos);
//path deatails
const path=require('path')
console.log(path.sep);
const fullpath=path.join('/subpath/','subpath2','pathh.txt');
console.log(fullpath);
//fs details
const {read,write}=require('fs');
const a1=read('./fs/nw.txt','utf8');
const a2=read('./fs/newfile.txt','utf8');
write(
    './fs/concatinatefile.txt',`${a1} ${a2}`
)