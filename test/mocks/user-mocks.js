const { userJWT } = require('../../app/helpers/index');
exports.userValidDataMockResponse = {
  id: 1,
  name: 'nicolas',
  lastName: 'Infante',
  birthDate: '1996-01-02',
  email: 'nicolas@hotmail.com.com',
  password: '$2b$08$K3LsjVDcHIy9iANS8m/kB.3x4B1Y6i5m0VZc8O.yaWbNK7YRW..NO',
  createdAt: '2022-11-30T20:21:21.794Z',
  updatedAt: '2022-11-30T20:21:21.794Z',
  roleId: 1,
  isActive: true
};

exports.userValidData = {
  name: 'nicolas',
  last_name: 'Infante',
  birth_date: '1996-01-02',
  email: 'nicolas@hotmail.com',
  password: '12345678',
  roleId: 1,
  isActive: true
};

exports.userNoData = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
};

exports.tokenTest = () => {
  const token = userJWT(this.userValidDataMockResponse.id, this.userValidDataMockResponse.roleId);
  return token;
};
  