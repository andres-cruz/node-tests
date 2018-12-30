const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    let res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
});

it('should set firstName and lastName', () => {
    let user = {location: 'Buenos Aires', age: 34};
    let res = utils.setName(user, 'Andrés Cruz')
    expect(res).toInclude({
        firstName: 'Andrés',
        lastName: 'Cruz'
    });
});