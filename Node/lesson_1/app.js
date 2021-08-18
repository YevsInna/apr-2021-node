const fileData = require('./dir/file_1');
const path = require('path');
console.log(fileData);
fileData.greeting('Inna');

console.log(__dirname);
console.log(__filename);


const fs = require('fs');
const textPath = path.join(__dirname,'dir', 'text.txt');
const textPath2 = path.join(__dirname,'dir', 'text2.txt');
const folderWithDeletedData = path.join(__dirname,'folder', 'deleted.txt');
console.log(textPath);

fs.writeFile(textPath, 'Hello,Inna', err => {
    console.log(err);
});

fs.appendFile (textPath, 'Hello again))', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('done!')
})

const mkDirPath = path.join(__dirname, 'dir', 'folder_2', 'lastFolder');
fs.mkdir(mkDirPath, {recursive:true}, err => {
    console.log(err);
})

fs.readFile(textPath, (err, data)=>{
    if (err){
        console.log(err);
        return
    }

    fs.appendFile(textPath2, data, err1 => {

    })
    console.log(data.toString());
});

fs.rename(textPath, folderWithDeletedData, err => {
    console.log(err);
});
