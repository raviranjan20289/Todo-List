const Sequelize = require('sequelize') ;

const sequelize =require('../utility/database');

const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    TodoList: Sequelize.STRING,
    Description: Sequelize.STRING,
   
  });
  
  module.exports = Product;
