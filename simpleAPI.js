const http = require('http');

const usersData=[
  {
        name:'anil',
        age:30,
        email:'anil@test.com'
    },
    {
        name:'sam',
        age:20,
        email:'sam@test.com'
    } ,
    {
        name:'peter',
        age:30,
        email:'peter@test.com'
    }   
]
http.createServer((req, resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(usersData));
    resp.end();

}).listen(6100)