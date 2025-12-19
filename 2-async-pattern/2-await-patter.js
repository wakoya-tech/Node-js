const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Home page')
        return
    }

    if (req.url === '/about') {
        // Simulating heavy work (bad practice)
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
        return
    }

    res.end('Error page')
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...')
})
console.log("welcome");
/*const { readFile, writeFile } = require('fs').promises
/*const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)
*/
/*
const start= async ()=>{
    try {
        const first = await readFilePromise('./content/frist.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
await writeFilePromise('./content/result=mind-grenade.txt',`THIS IS AWESOME:${first},${second}`,{ flag:'a'})


console.log(first,second);
    } 
    catch (error) {
        console.log(error)
        
    }
}


start()
*/ 