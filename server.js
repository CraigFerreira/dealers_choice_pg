const express = require('express');
const app= express();
const port= process.env.PORT || 3000;
const path= require('path')
const {client}= require('./db.js')

app.get('/', (req, res, next)=>{res.sendFile(path.join(__dirname, 'index.html'))})
app.use('/src', express.static(path.join(__dirname, 'src')))

const listen=async()=>{
    try{
        app.listen(port, ()=>{
            console.log(`listening on port ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

listen()



app.get('/cars', async(req,res)=>{
    const data = await client.query('SELECT * FROM "SportsCars"');
    console.log('data',data)
    const cars = data.rows;
    console.log(cars)
    res.send(cars);
})

