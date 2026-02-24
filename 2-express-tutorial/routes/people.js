/*const { request, json } = require("express");
const { people } = require("../data");
const express = request('express')

const router = express.Router();
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.post('/api/people',(req,res)=>{
    const {name}= req.body
    if(!name){
        return res.status
        .json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({
        success:true,person:name
    })
})
app.post('/api/people',(res,req)=>{
if(!name){
    return res 
    .status(400)
    .json({success:false, msg:'please provide name value'})
}

res.status(201).send({success:true,data:[...people,name]})

router.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const { name}=req.body
  const person =people.find((person)=>person.id === Number(id) ) 
if(!person){
    return res
    .status(404)
    .json({success:false,msg:`no person with id ${id}`})
}
}
)
const newPeople= people.map((person)=>{
    if(person.id === Number(id)){
        person.name=name
    }
    return person
})
res.status(200),json({success:true,data:newPeople})
})
router.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=>{
        person.id===Number(req.params.id){
            if(!person){
                return res
                .status(404)
                .json({
                    success:false,msg:`no person with ${req.params.id}`
                    
                })
            }
            
        }
    })
}),
let { people }= require('../data')
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))

app.use(express.json())


app.get('/api/people',(req,res)=>{
res.status(200).json({success:true,data:people})
})
app.post('/api/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({
            success:false,msg:'please provide name value'
        })
    }
    res.status(201).send({Success:true,person:name})
})

app.post('/login',(req,res)=>{
   const { name }= req.body
   if(name){
    return res.status(200).send(`welcome ${name}`)
   }
   return res.status(404).send('please provide credentials')
    res.send('POST')
})