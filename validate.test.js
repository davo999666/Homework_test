const validateTestNumCart = require('./validate');

describe('validateTestNumCart', () => {
    test('Check card numbers is valid',()=>{
        expect(validateTestNumCart('888866667777444 4')).toBe(false);
    })

})