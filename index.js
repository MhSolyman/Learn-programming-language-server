const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const dataOne=require('./data/data.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('runnig api')
})
app.get('/data',(req,res)=>{
    res.send(dataOne)
})
app.get('/course/:id',(req,res)=>{
    const id= req.params.id;
    const selectCorse=dataOne.find(c=>c.id===id)
    res.send(selectCorse)

})

app.listen(port,()=>{
    console.log('ok running app')
})