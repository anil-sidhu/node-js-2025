const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

        fs.readFile('html/form.html', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(500, { "content-type": 'text/plain' })
                resp.end('internal server error')

                return;

            }
            resp.writeHead(200, { "content-type": 'text/html' })

            if (req.url == '/') {
                resp.write(data);
            } else if (req.url == '/submit') {
                resp.write('<h1>Data submitted</h1>')
            }
            resp.end()
        })


    }).listen(3200)
    // http.createServer((req, resp) => {
    //     resp.writeHead(200, { "content-type": 'text/html' })
    //     console.log(req.url);

//     if (req.url == '/') {
//         resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name='name' />
//         <input type="text" placeholder="enter email" name='email' />
//         <button>Submit</button>
//         </form>
//         `);
//     } else if (req.url == '/submit') {
//         resp.write('<h1>Data submitted</h1>')
//     }

//     resp.end()
// }).listen(3200)