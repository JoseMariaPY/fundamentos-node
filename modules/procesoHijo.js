const exec = require('child_process')


exec('node modules/console.js', (err, stdout, sterr) => {
    if(err){
        console.error(err)
        return false
    }
    console.log(stdout)
})
