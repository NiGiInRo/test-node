exports.getProductsSerializer = data => ({
  products: data.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    brand: product.brand,
    creator_id: product.creatorId,
    category_id: product.categoryId
  }))
});

exports.newProductSerializer = data => ({
  product: {
    name: data.name,
    description: data.description,
    price: data.price,
    brand: data.brand,
    creator_id: product.creatorId,
    category_id: data.categoryId
  }
});
