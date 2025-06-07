const http = require("http");
http.createServer((req, resp)=>{
    resp.write("<h2>Hi this is anil sidhu from code step by step</h2>");
resp.end("Hello code step by step");
}).listen(4800);
 
