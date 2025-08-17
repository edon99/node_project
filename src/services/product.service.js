import db from '../models/index.js';

const Product = db.Product;
export async function getProducts(filters = {}) {
  try {
    const { categoryId, sort } = filters;

    const where = {};
    if (categoryId) {
      where.categoryId = categoryId;
    }

    const order = [];
    if (sort) {
      order.push(['price', sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']);
    }
    const products = await Product.findAll({
      where,
      order
    });
    return {
      type: 'success',
      data: products
    };
  } catch (error) {
    throw error
  }
}


export async function createProduct(data) {
  try {
    const product = await Product.create(data);
    return {
        type: 'success',
        data: product
     };
  } catch (error) {
    throw error;
  }
}

  export async function getProduct(id) {
  try {
    const product = await Product.findByPk(id);
    return {
        type: 'success',
        data: product
     };
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(id,data) {
  try {
    const [updated] = await Product.update(data, { where: { id } });
    const product = await Product.findByPk(id);
    return {
        type: 'success',
        data: product
     };
  } catch (error) {
   throw error
  }
}

export async function deleteProduct(id) {
  try {
    const deleted = await Product.destroy({ where: { id } });
    return {
        type: 'success',
        message: 'Product deleted successfully'
     };
  } catch (error) {
    throw error
  }
}