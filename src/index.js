import axios from 'axios';

// const list= document.getElementById('car-list')

// const init= async()=>{
//     try{
//         console.log('list', list);
//         const cars= await (await axios.get('server/cars')).data
//         console.log(cars)

//     }catch(err){
//         console.log(err)
//     }
// }

// init()

// const api= axios.create({
//     baseURL: http://localhost:3000/data
// })

const init=async()=>{
    try{
        const cars= (await axios.get('/cars')).data
        console.log(cars)
    }catch(err){
        console.log(err)
    }
}

init()