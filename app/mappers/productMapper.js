exports.newProductMapper = data => ({
  name: data.name,
  description: data.description,
  price: data.price,
  brand: data.brand,
  creatorId: data.creator_id,
  categoryId: data.category_id
});