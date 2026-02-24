const authorize = (req,res,next)=>{
    const {user}= req.query;
    if(user === 'Ayantu'){
        req.user = {name:'Ayantu',id:3}
        next()
    } else{
        res.status(404).send('unauthorized')
    }
   console.log('authorize'); 
   next()
}
module.exports = authorize