exports.newUserMapper = data => ({
    name: data.name,
    lastName: data.last_name,
    birthDate: data.birth_date,
    email: data.email,
    password: data.password,
    roleId: data.role_id,
    isActive: data.is_active
  });

  exports.loginUserMapper = data => ({
    email: data.email,
    password: data.password
  });
  

