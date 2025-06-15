
const fs = require('fs');


const operation = process.argv[2];
if(operation=='write'){
const name = process.argv[3];
const content = process.argv[4];
const fullName="files/"+name+".txt"
fs.writeFileSync(fullName,content)
}else if(operation=='read'){
const name = process.argv[3];
// const content = process.argv[4];
const fullName="files/"+name+".txt"
let data =fs.readFileSync(fullName,"utf-8");
console.log(data);
}
else if(operation=='update'){
const name = process.argv[3];
const content = process.argv[4];
const fullName="files/"+name+".txt"
let data =fs.appendFileSync(fullName,content);
console.log(data);
}
else if(operation=='delete'){
const name = process.argv[3];
// const content = process.argv[4];
const fullName="files/"+name+".txt"
fs.unlinkSync(fullName);
}else{
    console.log("operation not found");
    
}
// fs.writeFileSync("files/banana.txt","This is a fruit");

// fs.unlinkSync("files/banana.txt")

// const data = fs.readFileSync('files/apple.txt',"utf-8");
// console.log(data);

// fs.appendFileSync("files/apple.txt"," and this is a good for health")