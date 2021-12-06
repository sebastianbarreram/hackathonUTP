//Se requieren y usan las dependencias que se instalaron
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()


require('./database')

//Se llama a morgan como desarrollador
app.use(morgan('dev'))

app.use(express.json({limit: '6mb'}));
//application/x-www-form-urlencoded para que la db reciba ese tipo de formato
app.use(express.urlencoded({ extended: true }))
app.use(express.urlencoded({limit: '6mb'}));
app.use(cors({ origen: '*' }))


//Rutas
app.use('/user', require('./routes/User.route'))
app.use('/producto', require('./routes/Producto.route'))


//Puerto

app.set('puerto', process.env.PORT || 4000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});