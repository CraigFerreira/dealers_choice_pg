import axios from 'axios';

const list= document.getElementById('car-list')

console.log('this is my car list', list)

const renderList=(cars)=>{
    const html=cars.map((car)=>`
    <li>
        <a href='${car.user_id}'>${car.name}</a>
    </li>
    `
    ).join('')
    list.innerHTML=html;
}

const init=async()=>{
    try{
        const cars= (await axios.get('/cars')).data
        console.log(cars)
        renderList(cars)
    }catch(err){
        console.log(err)
    }
}

init()