const fs = require('fs')
const { listenerCount } = require('process')


function readFile(path, cb){
    fs.readFile(path,(err, data) => {
        if(err){
            console.log(err)
        }else{ 
            cb(data.toString())
        }
    })
}

function writeFile(path, data, cb) {
    fs.writeFile(path, data, (err) => {
        if(err){
            console.log('No he podido escribirlo', err)
        }else{
            cb(data.toString())
        }
    });
}

function deleteFile(path, cb) {
    fs.unlink(path, cb)
}

//readFile(__dirname + '/archivo.txt', console.log)

//writeFile(__dirname + '/archivo.txt', "prueba de escritura", console.log)

deleteFile(__dirname + '/archivo.txt', console.log)