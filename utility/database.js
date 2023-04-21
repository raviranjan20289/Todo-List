const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolists','root','connectnode',{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;