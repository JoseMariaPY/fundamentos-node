require('dotenv').config()

console.log('Inciando ..')
let name = process.env.NAME || 'Sin nombre';
let lastName = process.env.LAST_NAME || 'Sin apellido';

function hello(name, firstCallBack) {
    setTimeout(function (){
        console.log(`Hello:  ${name}`);
        firstCallBack(name);
    }, 1000);
}

function by(name, secondCallBack) {
    setTimeout(function (){
        console.log(`By:  ${name}`);
        secondCallBack();
    }, 1000);
}

function talk(callbackTalk){
    setTimeout(function (){
        console.log('bla bla bla');
        callbackTalk();
    }, 1000);
}

function conversation(name, cant, callback){
    if (cant > 0) {
        talk(function (){
            conversation(name, --cant, callback)
        });
    } else {
        by(name, callback)
    }
}



hello(name, function(){
    conversation(name, 3, function(){
        console.log('finalizando')
    })
})