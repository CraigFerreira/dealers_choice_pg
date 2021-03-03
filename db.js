const pg= require('pg')
const client = new pg.Client(process.env.DATABASE_URL||'postgres:localhost/sportsCars_db')


const syncAndSeed= async()=>{

    const SQL=`
    DROP TABLE IF EXISTS "SportsCars";
    CREATE TABLE "SportsCars"(
        user_id serial primary key,
        name varchar(20) not null,
        top_speed varchar(20) not null,
        maker varchar(20) not null,
        cost varchar(20) not null
    );

    INSERT INTO "SportsCars"(name, top_speed, maker, cost) VALUES('SF90 Stradale', '211 m.p.h.', 'Ferrari', '$505,000');
    INSERT INTO "SportsCars"(name, top_speed, maker, cost) VALUES('Veyron', '267 m.p.h', 'Bugatti', '$1,300,000');
    INSERT INTO "SportsCars"(name, top_speed, maker, cost) VALUES('Murcielago', '214 m.p.h', 'Lamborghini', '$355,000');
    INSERT INTO "SportsCars"(name, top_speed, maker, cost) VALUES('DBS V12', '211 m.p.h', 'Aston Martin', '$316,000');
    
   `
   await client.query(SQL)
}

const test = async()=>{
    try{
    await client.connect();
    syncAndSeed();
    console.log('db connected')
    }catch(err){console.log(err)}
}

test()


module.exports={
    client
}