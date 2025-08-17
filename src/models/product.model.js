import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


const Product = sequelize.define('Product', {
    name: {
    type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price :{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
},
{
  timestamps: true
});


export default Product;
