const { checkSchema } = require('express-validator');

exports.validateCreationUser = checkSchema({
  name: {
    errorMessage: 'Name should be at least 3 chars long and maximum of 50 chars',
    isLength: {
      options: { min: 3, max: 50 }
    },
    trim: true
  },
  last_name: {
    errorMessage: 'Last Name should be at least 3 chars long and maximum of 50 chars',
    isLength: {
      options: { min: 3, max: 50 }
    },
    trim: true
  },
  birth_date: {
    isDate: true,
    errorMessage: 'Birthdate should have an specific date format, example: 2002-01-02',
    trim: true
  },
  email: {
    errorMessage: 'Please enter a valid email address, Email must contain @ domain',
    isEmail: true,
    trim: true
    //matches: {
      //options: { source: /^[A-Za-z0-9._%+-]+@hotmail.com$/ }
    //}
  },
  password: {
    isLength: {
      errorMessage: 'Password should be at least 8 chars long',
      options: { min: 8 }
    }
  }
});
