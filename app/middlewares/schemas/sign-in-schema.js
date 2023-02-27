const { checkSchema } = require('express-validator');

exports.validateSignInUser = checkSchema({
  email: {
    errorMessage: 'Please enter a valid email address, Email must contain @ and domain',
    isEmail: true,
    trim: true
    //matches: {
      //options: { source: /^[A-Za-z0-9._%+-]+@wolox.com$/ }
    //}
  }
});
