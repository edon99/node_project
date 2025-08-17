import * as categoryService from '../services/category.service.js';

export async function getCategories(req, res) {
  try{
    const result = await categoryService.getAllCategories();
    return res.status(200).json(result)
  }catch(error){
    return res.status(error.status).json({
      type: "error",
      message: error.message || "error fetching categories"
    });
  }
  
}

export async function createCategory(req, res) {
   const data = req.body;
      if (req.file) {
      data.image = `/uploads/Categorys/${req.file.filename}`;
    }
    try {
    const result = await categoryService.createCategory(data);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error creating category"
    });
  }
}

export async function getCategory(req, res) {
   const { id } = req.params;
   try {
    const result = await categoryService.getCategory(id);
    return res.status(200).json(result);
  } catch (error) {
   return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error fetching category"
    });
  }
}

export async function editCategory(req, res) {
   const { id } = req.params;
    const data = req.body;
      if (req.file) {
        data.image = `/uploads/Categorys/${req.file.filename}`;
        }
   try {
    const result = await categoryService.updateCategory(id,data);
    return res.status(200).json(result);
  } catch (error) {
   return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error updating category"
    });
  }
}

export async function deleteCategory(req, res) {
   const { id } = req.params;
    try {
    const result = await categoryService.deleteCategory(id);
    return res.status(200).json(result);
  } catch (error) {
      return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error updating category"
    });
  }
}