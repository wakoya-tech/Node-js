const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('./public'))
app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})
// 404 handler (FIXED)
app.use((req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})
