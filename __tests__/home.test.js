const request = require('supertest');
const {app} = require('./commonJest'); 

describe('Snapshot testing', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })
    it('Renders Index Page correctly', done => {
        request(app)
            .get('/')
            .then(response => {
                expect(response.text).toMatchSnapshot();
                done();
            });
    }, 2000);
});