'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('ice cream router', () => {
  test('handles create route', async () => {
    let response = await request.post('/ice-cream').send({
      flavor: 'chocolate',
    });

    expect(response.status).toEqual(200);
    expect(response.body.flavor).toEqual('chocolate');
  });

  test('ice cream get route', async () => {
    let response = await request.get('/ice-cream');

    expect(response.status).toEqual(200);
    expect(response.body[0].flavor).toEqual('chocolate');
  });

  test('get ice cream by id', async () => {
    let response = await request.get('/ice-cream/1');

    expect(response.status).toEqual(200);
    expect(response.body[0].flavor).toEqual('chocolate');
  });
});