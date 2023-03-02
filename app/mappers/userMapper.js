const { userRoles } = require("../helpers/userRoles");

exports.newUserMapper = data => ({
    name: data.name,
    lastName: data.last_name,
    birthDate: data.birth_date,
    email: data.email,
    password: data.password,
    roleId: data.role_id,
    isActive: data.is_active
  });

  exports.newGoogleUserMapper = profile => ({
    name: profile.name.givenName,
    lastName: profile.name.familyName,
    birthDate: null,
    email: profile.emails[0].value,
    password: 'NewUser1*',
    roleId: userRoles.regular,
    isActive: true
  });

  exports.loginUserMapper = data => ({
    email: data.email,
    password: data.password
  });
  

