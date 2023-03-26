const request = require('supertest');
const app = require('../../index');
const userService = require('../../app/services/userService');
const { databaseError } = require('../../app/errors');
const { userValidDataMockResponse, userValidData, tokenTest, userNoData } = require('../mocks/user-mocks')
jest.mock('../../app/services/userService');

describe('sign-up users', () => {
  let userServiceSpy = undefined;
  beforeEach(() => {
    userServiceSpy = jest
      .spyOn(userService, 'createUserService')
      .mockResolvedValueOnce([userValidDataMockResponse])
      .mockRejectedValueOnce(
        databaseError('connection with db failed or invalid data. check and try again ')
      );
  });
  
  test('must return 201', async () => {
    const response = await request(app)
      .post('/users/create')
      .auth(tokenTest(), { type: 'bearer' })
      .send(userValidData);
    //console.log(response);
    expect(userServiceSpy).toHaveBeenCalled();
    expect(response.statusCode).toEqual(201);
  });
  
  test('must return 400, password no valid', async () => {
    const newUserTestPassInvalid = { ...userValidData, password: '123' };
    const response = await request(app)
      .post('/users/create')
      .auth(tokenTest(), { type: 'bearer' })
      .send(newUserTestPassInvalid);
    expect(response.statusCode).toEqual(400);
  });

  test('must return 400, require data', async () => {
    const response = await request(app)
      .post('/users/create')
      .auth(tokenTest(), { type: 'bearer' })
      .send(userNoData);
    expect(response.statusCode).toEqual(400);
  });

  test('must return 500, email has been taken', async () => {
    const response = await request(app)
      .post('/users/create')
      .auth(tokenTest(), { type: 'bearer' })
      .send(userValidData);
      console.log(response)
    expect(userServiceSpy).toHaveBeenCalled();
    expect(response.statusCode).toEqual(500);
  });
  
});