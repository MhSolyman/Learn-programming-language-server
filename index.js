const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dataOne=require('./data/data.json')

app.get('/',(req,res)=>{
    res.send('runnig api')
})
app.get('/data',(req,res)=>{
    res.send(dataOne)
})

app.listen(port,()=>{
    console.log('ok running app')
})