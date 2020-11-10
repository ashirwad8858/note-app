const fs = require('fs')

const data = JSON.parse(fs.readFileSync('2-json.json').toString());
console.log(data);
data.name = 'Ashirwad';

const writedata = JSON.stringify(data);
fs.writeFileSync('2-json.json',writedata);

// const book ={
//     title:'This is title',
//     auther:'ABC'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);

// const databuffer = fs.readFileSync('1-json.json')
// const dataJSON = databuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);  