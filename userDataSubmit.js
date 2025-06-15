const queryString = require('querystring'); function userDataSubmit(req,resp){

     let dataBody = [];
                req.on('data', (chunk) => {
                    dataBody.push(chunk);
                });

        req.on('end', () => {
                            let rawData = Buffer.concat(dataBody).toString();
                            let readableData = queryString.parse(rawData);
                            let dataString = "My name is " + readableData.name + " and my email id is" + readableData.email;
                            console.log(dataString);
        })

    resp.write(`
          <h1>You can get data from user form here</h1>`)
}
module.exports= userDataSubmit;