exports.newUserMapper = data => ({
    name: data.name,
    lastName: data.last_name,
    email: data.email,
    password: data.password,
    roleId: data.role_id,
    isActive: data.is_active
  });