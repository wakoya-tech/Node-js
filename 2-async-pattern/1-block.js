const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/block') {
        // BLOCKING CODE
        for (let i = 0; i < 5_000_000_000; i++) {
            // heavy CPU work
        }
        res.end('Blocking finished')
        return
    }

    res.end('Hello world')
})

server.listen(5000, () => {
    console.log('Server running on port 5000...')
})
