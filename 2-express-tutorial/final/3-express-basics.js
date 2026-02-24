const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('home page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

// 404 handler (FIXED)
app.use((req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})
