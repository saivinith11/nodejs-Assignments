const readline = require('readline').createInterface({

    input:process.stdin,

    output:process.stdout

})



readline.question(`what's your name? `, name => {

    console.log(`${name} Hello, ${name}!`)

    readline.close()

} )