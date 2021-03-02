const express = require('express');
const app= express();
const port= process.env.PORT || 3000;
const path= require('path')
const {client}= require('./db.js')

app.use(express.urlencoded({extended: false}))



app.get('/', (req, res, next)=>{res.sendFile(path.join(__dirname, 'index.html'))})
app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))

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



app.get('/cars', async(req,res, next)=>{
    try{
    const data = await client.query('SELECT * FROM "SportsCars"');
    // console.log('data',data)
    const cars = data.rows;
    // console.log(cars)
    res.send(cars);
    }catch(err){
        next(err)
    }
})

app.get('/:id', async(req,res)=>{
    const id= req.params.id;
    const data = await client.query('SELECT * FROM "SportsCars" where user_id= $1;',[req.params.id]);
    // console.log('id', id)
    // console.log('data',data)
    const cars = data.rows;
    console.log(cars)
    res.send(
        `
        <html>
            <head></head>
            <body>
                
                ${cars.map((car)=>{
                    return `<h1>Model: ${car.name}</h1>
                    <div>
                        <ul>
                            <li>Top Speed: ${car.top_speed}</li>
                            <li>Car Maker: ${car.maker}</li>
                            <li>Price: ${car.cost}</li>
                        </ul>
                    </div>
                    `
                })}
                

                
            </body>
        </html>
    `
    );
})
