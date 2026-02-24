const authorize = require('./authorize')
const logger = require('./logger')
// req=> middleware => res

//1. use vs route
//2. options - our own / express / third party
//app.use('/api',logger)
//app.use([logger,authorize])
//app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})