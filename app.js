const express = require('express');
const path = require('path');

const bodyParser =require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors')

app.use(cors())

const sequelize = require('./utility/database');


app.use(bodyParser.json({extended : false}))

const adminRoutes = require('./routes/task');

app.use(adminRoutes);

sequelize.sync()
.then(result =>{
    // console.log(result)
    app.listen(3000)
}).catch(err =>console.log(err))