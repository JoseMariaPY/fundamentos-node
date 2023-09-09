require('dotenv').config()

function hello(name, firstCallBack) {
    setTimeout(function (){
        console.log(`Hello:  ${name}`);
        firstCallBack();
    }, 1000);
}

function by(name, secondCallBack) {
    setTimeout(function (){
        console.log(`By:  ${name}`);
        secondCallBack();
    }, 1000);
}


console.log('Inciando ..')
let name = process.env.NAME || 'Sin nombre';
let lastName = process.env.LAST_NAME || 'Sin apellido';

hello(name + " "+ lastName, function(){
    by(name + " " +lastName, function(){
        console.log('Terminado proceso ..')
    });
});
