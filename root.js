const http = require('http');
const userForm = require('./userForm');
const userDataSubmit= require('./userDataSubmit')
http.createServer((req,resp)=>{
   resp.writeHead(200,{"content-type":'text/html'})
   if(req.url=="/"){
    userForm(req, resp)
   }else if(req.url=="/submit"){
   userDataSubmit(req, resp)
   }
  
   resp.end();
}).listen(3200)