'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models/index');

const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('server test', () => {
  test('tests /', async () => {
    let response = await request.get('/');

    expect(response.status).toEqual(200);
  });
});