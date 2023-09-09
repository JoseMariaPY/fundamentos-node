require('dotenv').config()

let name = process.env.NAME || 'Sin nombre';
let lastName = process.env.LAST_NAME || 'Sin apellido';

console.log(`Hello:  ${name}`);

console.log(`Last name ${lastName}`);