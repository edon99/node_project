import db from '../models/index.js';
import { UniqueConstraintError } from 'sequelize';


const Category = db.Category;
export async function getAllCategories() {
    try{
        const categories = await Category.findAll();
        return {
        type: 'success',
        data: categories,
        ...(categories.length === 0 && { message: 'No categories found' })
     };
    }catch(error){
       throw error
    }
    
}

export async function createCategory(data) {
  try {
    const category = await Category.create(data);
    return {
        type: 'success',
        data: category
     };
  } catch (error) {
   throw error
  }
}

  export async function getCategory(id) {
  try {
    const category = await Category.findByPk(id);
    return {
        type: 'success',
        data: category
     };
  } catch (error) {
  throw error 
  }
}

export async function updateCategory(id,data) {
  try {
    const [updated] = await Category.update(data, { where: { id } });
    const category = await Category.findByPk(id);
    return {
        type: 'success',
        data: category
     };
  } catch (error) {
  throw error
  }
}

export async function deleteCategory(id) {
  try {
    const deleted = await Category.destroy({ where: { id } });
    return {
        type: 'success',
        message: 'Category deleted successfully'
     };
  } catch (error) {
  throw error
  }
}