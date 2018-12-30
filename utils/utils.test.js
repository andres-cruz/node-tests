const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);
    if(res !== 44) {
        throw new Error(`Expected 44, but got ${res}.`);
    }
});

it('should return the square', () => {
    let res = utils.square(8);
    if(res !== 16) {
        throw new Error(`Expected 16, but got ${res}`);
    }
});