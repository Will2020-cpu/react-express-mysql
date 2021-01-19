const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const passport = require('passport')




//Settings
app.set('port',process.env.port || 5000) 


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());


//Routes 
app.use(require('./routes/index'))

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})

