console.log("http module:");
const server=require('http');
const { createServer } = require('https');
const s=server.createServer((req,res)=>{
    if(req.url=="/d"){
        res.end("good to see you ? FOR LEARING BACKEND!");
    }
    else if(req.url=="/|"){
        res.end("strting with choosing best time");
    }
    else{
    res.end(`
        <h1>basic to advance algorithms:</h1>
        <p>lets staring with daily schedules <abbr title="staring with daily schedules">dai</abbr></p>
        <ol>
        <li>wake up at 6.15
        </li>
        <li>go to gym till 8.00 am
        </li>
                <li>go to college
        </li>
   
                <li>come back hostel and take nap of 1 hour
        </li>
            
                <li>
                learing and solve leetcode
        </li>
        </ol>
        `
    )
}
}

)
s.listen(4000);