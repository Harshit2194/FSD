const fs = requrie('fs').promises;
async function readFileExample(){
    try{
        const data = await fs.readFile('myfile.txt','utf8');
        console.log('File content:',data);
    }catch(err){
        console.error('Eror reading file:',err);

    }
}
readFileExample();

const {promisify} = require('util');
const readFileAsync = promisify(require('fs').readFile);
async function readWithPromisify() {
    try{
        const data = await readFileAsync('myfile.txt','utf8');
        console.log(data);
    }catch(err){
        console.error(err);
    }
}
readWithPromisify();
