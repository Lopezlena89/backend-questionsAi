const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');



//Crear servidor de express

const app = express();

//Base de datos

dbConnection();

//Cors
app.use(cors())

//Directorio publico
app.use( express.static('public') );


//Lectura y parseo del body

app.use( express.json() );


//Rutas
app.use('/auth', require('./routes/auth') );
app.use('/', require('./routes/messages'));
app.use('/group', require('./routes/group'));


app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})



//Escuchar peticiones

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});


