const express = require('express');
const app= express();
const port= process.env.PORT || 3000;
const path= require('path')



app.get('/', (req,res, next)=>{res.sendFile(path.join(__dirname, 'index.html'))})

// const list= document.getElementById('car-list')


const listen=()=>{
    try{
        app.listen(port, ()=>{
            console.log(`listening on port ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

listen()

// app.get('/', (req, res, next)=>{
//     res.sendFile('index.html', {root: path.join(__dirname, './public')})
//     next()
// })


app.get('/details', (req,res)=>{
    res.send('Details')
})

app.get('*',(req, res)=>{
    res.send('Homepage')
})