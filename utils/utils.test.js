const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        let res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square a number', () => {
        let res = utils.square(4);
        expect(res).toBe(16).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (res) => {
            expect(res).toBe(16).toBeA('number');
            done();
        });
    });

    it('should set firstName and lastName', () => {
        let user = { location: 'Buenos Aires', age: 34 };
        let res = utils.setName(user, 'Andrés Cruz')
        expect(res).toInclude({
            firstName: 'Andrés',
            lastName: 'Cruz'
        });
    });
});

