import * as productService from '../services/product.service.js';

export async function getProducts(req, res) {

  const { categoryId, sort } = req.query;
  const filters = {
    categoryId: categoryId ? parseInt(categoryId) : null,
    sort: sort || null
  };
  try{
      const result = await productService.getProducts(filters);
      res.status(200).json(result)
  }catch(error){
    return res.status(error.status || 500).json({
      type: "error",
      message: error.message || "error fetching products"
    });
  }

}


export async function createProduct(req, res) {
  const data = req.body;
   if (req.file) {
        data.image = `/uploads/products/${req.file.filename}`;
        }
    try {
    const result = await productService.createProduct(data);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(error.status).json({
       type: "error",
        message: error.message || 'error creating product'
    });
  }
}

export async function getProduct(req, res) {
  const { id } = req.params;
   try {
    const result = await productService.getProduct(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status).json({
       type: "error",
        message: error.message || 'error fetching product'
       });
  }
}

export async function editProduct(req, res) {
  const { id } = req.params;
    const data = req.body;
      if (req.file) {
        data.image = `/uploads/products/${req.file.filename}`;
        }
   try {
    const result = await productService.updateProduct(id,data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status).json({
       type: "error",
        message: error.message || 'error updating product'
       });
  }
}

export async function deleteProduct(req, res) {
   const { id } = req.params;
    try {
    const result = await productService.deleteProduct(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status).json({
       type: "error",
        message: error.message || 'error deleting product'
       });
  }
}