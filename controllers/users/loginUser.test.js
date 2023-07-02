const httpMocks = require('node-mocks-http');
const bcrypt = reqiure('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { login } = require('./loginUser');

jest.mock('../../models/user');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

const { SECRET_KEY } = process.env;

describe('Login Controller', () => {
    it('Should return status code 200 an a token', async () => {
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/login',
            body: {
                email: 'test@test.com',
                password: '123456'
            },
        });
        const responce = httpMocks.createResponse();

        const user = {
            _id: 'user1',
            email: 'test@test.com',
            password: 'hashedpassword',
        };

        User.findOne.mockResolveValue(user);
        bcrypt.compare.mockResolveValue(true);
        jwt.sign.mockResolveValue('testtoken');

        await login(request, responce);
        
        expect(responce.statusCode).toBe(200);
        expect(JSON.parse(responce._getData())).toEqual({
            token: 'testtoken',
        });
    });
});