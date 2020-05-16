process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const request = require('supertest');
const mongoDBUrl = require('../database/mongodb').url;
const app = require('../app');

beforeAll(() => {
    mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) return console.error({err});
        console.log('App succesfully connected to DB instance');
    });

    mongoose.connection.on('error', (err) => {
        console.error({err});
    });
});

it('starting app', () => {
    expect(true).toEqual(true);
})

afterAll(async () => {
    await mongoose.connection.close((err) => {
        if (err) return console.error({err});
    });

    console.log('Connection to DB closed');
});

module.exports = {
    db: mongoose.connection,
    app: app,
    request: request,
    supertest: request
}

