const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// var cors = require('cors');
const port =4000;


// validando lo de cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });


require('./db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(cors());

require('./routes')(app);

app.get('/',(req,res) =>{
    res.send('Hi from our simple app');
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})