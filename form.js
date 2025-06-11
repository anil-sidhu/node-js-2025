const http = require('http');
const fs = require('fs');



http.createServer((req, resp)=>{
    fs.readFile('html/form.html','utf-8',(err,data)=>{
        if(err){
            resp.end('internal server error')
            return false;
        }
        
        if(req.url=="/"){
resp.writeHead(200,{"content-type":"text/html"})
    resp.write(data)
        resp.end();
    }else{
        resp.write(`
       <h1>data submit</h1>
        `)
        resp.end();
    }
    })
   
    

}).listen(3200);


// http.createServer((req, resp)=>{
//     if(req.url=="/"){
// resp.writeHead(200,{"content-type":"text/html"})
//     resp.write(`
//         <form  action="/submit" method="post" >
//         <input type="text" placeholder="enter name" name="name" />
//         <input type="text" placeholder="enter email" name="email" />
//         <button>Submit</button>
//         </form>
//         `)
//     }else{
//         resp.write(`
//        <h1>data submi</h1>
//         `)
//     }
    
// resp.end();
// }).listen(3200);