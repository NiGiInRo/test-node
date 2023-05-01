const { checkSchema } = require('express-validator');

exports.validateCreationProduct = checkSchema({
  name: {
    errorMessage: 'Name should be at least 3 chars long and maximum of 50 chars',
    isLength: {
      options: { min: 3, max: 50 }
    },
    trim: true
  },
  description: {
    errorMessage: 'description should be at least 3 chars long and maximum of 150 chars',
    isLength: {
      options: { min: 3, max: 150 }
    },
    trim: true
  },
  price: {
    errorMessage: 'Price should be a valid integer price',
    trim: true
  },
  brand: {
    errorMessage: 'brand should be at least 3 chars long and maximum of 50 chars',
    isLength: {
      options: { min: 3, max: 50 }
    },
    trim: true
    //matches: {
      //options: { source: /^[A-Za-z0-9._%+-]+@hotmail.com$/ }
    //}
  },
  category_id: {
    errorMessage: 'category should be a valid id category',
    trim: true
  },
  creator_id: {
    errorMessage: 'The creator should be exists',
    trim: true
  }
});