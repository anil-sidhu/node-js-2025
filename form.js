const http = require('http');
const fs = require('fs');

http.createServer((req,resp)=>{
   console.log("apple");
   if(req.url=='/'){
 resp.writeHead(200,{'content-type':'text/html'})
   resp.write(`<form action='/submit' method='post' ><input name='email' type="text" />
    <input  name='password' type="password" />
    
    <button>Click me</button>
    </form>`)
   }
   else{
 resp.writeHead(200,{'content-type':'text/html'})
   resp.write(`<h1>Form Submitted</h1>`)
   }
  
   resp.end()
}).listen(3200) 