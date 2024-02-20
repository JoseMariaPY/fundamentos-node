let sum = 0
console.time('bucle')
for (let i = 0; i < 100000000; i++) {
  sum += i
}
console.timeEnd('bucle')

console.time('asincrono')
asincrona()
  .then(() => console.timeEnd('asincrono'))

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Termina el proceso asíncrono')
      resolve()
    })
  })
}