exports.getUsersSerializer = data => ({
    users: data.map(user => ({
      id: user.id,
      first_name: user.name,
      last_name: user.lastName,
      birth_date: user.birthDate,
      email: user.email,
      role_id: user.roleId,
      is_active: user.isActive
    }))
  });

exports.newUserSerializer = data => ({
    user: {
      name: data.name,
      last_name: data.lastName,
      email: data.email,
      birth_date: data.birthDate,
      password: data.password,
      role_id: data.roleId,
      is_active: data.isActive
    }
});

exports.loginUserSerializer = data => ({
  user: {
    first_name: data.name,
    last_name: data.lastName,
    email: data.email,
    role_id: data.roleId
  }
});
