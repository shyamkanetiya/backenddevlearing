const {readFileSync,writeFileSync}=require('fs');
const a1=readFileSync('./fs/nw.txt','utf8');
const a2=readFileSync('./fs/newfile.txt','utf8');
console.log("starting a task");
writeFileSync(
    './fs/concatinatefile.txt',`${a1} ${a2}`,     
)
console.log("done with task")
console.log("start next task");

//asyc file execution
const {readFile,writeFile}=require('fs');
console.log("starting a task");
readFile(
    './fs/newfile.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const a3=result;
    readFile(
    './fs/nw.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const a4=result;
    writeFile(
        './fs/concatinatefile.txt',`${a3} ${a4}`,
(err,result)=>{
        if(err){
            console.log(err);
            return;
        } 
         console.log("done with task") 
}
);
}
);
}
);
console.log("start next task");
    