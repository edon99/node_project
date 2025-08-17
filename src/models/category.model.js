import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


const Category = sequelize.define('Category', {
    name: {
    type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
},
{
  timestamps: true
});


export default Category;
