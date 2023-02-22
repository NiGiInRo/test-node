exports.getUsersSerializer = data => ({
    users: data.map(user => ({
      id: user.id,
      first_name: user.name,
      last_name: user.lastName,
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
      password: data.password,
      role_id: data.roleId
    }
});