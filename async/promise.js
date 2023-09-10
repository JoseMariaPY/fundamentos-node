require('dotenv').config()


let name = process.env.NAME || 'Sin nombre';
let lastName = process.env.LAST_NAME || 'Sin apellido';

function hello(name) {
    return new Promise( function (resolve, reject) {
        setTimeout(function (){
            console.log(`Hello:  ${name}`);
            resolve(name);
        }, 1000);

    });
}

function by(name) {
    return new Promise ( function (resolve, reject)  {
        setTimeout(function (){
            console.log(`By:  ${name}`);
            resolve(name);
        }, 1000);
    })
}

function talk(name){
    return new Promise ( function (resolve, reject)  {
        setTimeout(function (){
            console.log('bla bla bla');
            resolve(name);
        }, 1000);
    });   
}


console.log('Inciando ..')
hello(name)
    .then(talk)
    .then(by)
    .then((name) => {
        console.log('terminando')
    })
    .catch(err => {
        console.log('Ocurrio un error')
    })