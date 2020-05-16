

const request = require('supertest');
const {app} = require('./commonJest');

describe('Unit testing', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it('Get reports', async done => {
        const res = await request(app).get(`/api/reports/`);

        const {
            statusCode,
            body
        } = res;

        expect(statusCode).toEqual(200);
        expect(body.reports.length).toBeGreaterThan(0);
        done();
    }, 2000);

    it('Get one report by ID', async done => {
        const id = '1';
        const res = await request(app).get(`/api/reports/user/${id}`);

        const {
            statusCode,
            body
        } = res;

        expect(statusCode).toEqual(200);
        expect(body.reports.length).toBeGreaterThan(0);
        done();
    }, 2000);

    it('Tries to get reports by not registered User', async done => {
        const id = '999';
        const res = await request(app).get(`/api/reports/user/${id}`);

        const {
            statusCode,
            body
        } = res;

        expect(statusCode).toEqual(200);
        expect(body.reports.length).toEqual(0);
        done();
    }, 2000);

    it('Tries to get reports by a not valid ID', async done => {
        const id = 'deptrai';
        const res = await request(app).get(`/api/reports/user/${id}`);

        const {
            statusCode,
            body
        } = res;

        expect(statusCode).toEqual(500);
        done();
    }, 2000);

    it('Creates report and stores into collection', async done => {
        const user_id = 5,
            date = new Date(),
            latitude = 54.123456,
            longtitude = -10.9832,
            symtoms = 'fieber',
            precondition = true,
            infected_area = true,
            infected_person = true,
            details = 'HIV positiv und Lungenkrebs',
            status = true

        const res = await request(app)
            .post('/api/reports/')
            .send({
                user_id,
                date,
                latitude,
                longtitude,
                symtoms,
                precondition,
                infected_area,
                infected_person,
                details,
                status
            });

        const {
            statusCode,
            body
        } = res;

        expect(statusCode).toEqual(201);
        expect(body).not.toBeNull();
        done();
    }, 2000);

    it('Tries to create report with not valid values', async done => {
        const user_id = 'depTrai',
            date = new Date(),
            latitude = "falsch",
            longtitude = "minh",
            symtoms = 'fieber',
            precondition = "cong",
            infected_area = "manh",
            infected_person = true,
            details = 'Nguoi Viet',
            status = true

        const res = await request(app)
            .post('/api/reports/')
            .send({
                user_id,
                date,
                latitude,
                longtitude,
                symtoms,
                precondition,
                infected_area,
                infected_person,
                details,
                status
            });

        const {
            statusCode,
        } = res;

        expect(statusCode).toEqual(500);
        done();
    }, 2000);

    it('Get report 5eb7e1b61ead3631e46a591b', async done => {
        const assertReport = {
            date: '2020-05-10T11:12:39.940Z',
            _id: '5eb7e1b61ead3631e46a591b',
            user_id: 1,
            latitude: 52.5103812,
            longtitude: 13.505267,
            symtoms: 'husten',
            precondition: false,
            infected_area: false,
            infected_person: false,
            details: 'No comment',
            status: 'sent',
            __v: 0,
            id: '5eb7e1b61ead3631e46a591b'
        }
        const id = '5eb7e1b61ead3631e46a591b';
        const res = await request(app).get(`/api/reports/${id}`);

        const {
            statusCode,
            body
        } = res;

        expect(statusCode).toEqual(200);
        expect(body.report).toEqual(assertReport);
        done();
    }, 2000);
});

