import sequelize from '../config/database.js';
import Product from './product.model.js';
import User from './user.model.js';
import Category from './category.model.js';


const db = {
  sequelize,
  Sequelize: sequelize.Sequelize,
  User,
  Product,
  Category
};

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });


Object.values(db)
  .filter(model => model?.associate)
  .forEach(model => model.associate(db));

export default db;
