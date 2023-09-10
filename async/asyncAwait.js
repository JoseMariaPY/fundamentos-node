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


async function main() {
    let nombre = await hello(name + " " + lastName)
    await talk()
    await by(nombre)
    console.log('Terminando ejecucion')
}


console.log('Inciando ..')
main();
