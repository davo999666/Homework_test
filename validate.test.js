
const { validateTestNumCart, validateDateForm, validateDatForm, validatePhonNum, validateNumLessAndEqual } = require('./validate');


              // Credit card number (8-16 digits)
describe('validateTestNumCart', () => {
   test('Check card numbers is valid',()=>{
       expect(validateTestNumCart('888866667777444')).toBe(true);
       expect(validateTestNumCart('888866667777')).toBe(true);
       expect(validateTestNumCart('88886666')).toBe(true);
   })
    test('Check card numbers is invalid',()=>{
        expect(validateTestNumCart('888866667777444 4')).toBe(false);
        expect(validateTestNumCart('88886666777744440')).toBe(false);
        expect(validateTestNumCart('8888666')).toBe(false);
        expect(validateTestNumCart('88886666777$')).toBe(false);
    })

})
                 // Date (Format: DD.MM.YYYY)
describe('validateTestDataForm',()=>{
    test('Check card numbers is valid',()=>{
        expect(validateDateForm('22.11.2000')).toBe(true);
        expect(validateDateForm('02.01.2000')).toBe(true);
    })
    test('Check card numbers is invalid',()=>{
        expect(validateDateForm('32.01.2000')).toBe(false);
        expect(validateDateForm('30.13.2000')).toBe(false);
        expect(validateDateForm('30.12.200')).toBe(false);
    })
})


                   // Date (Format: YYYY-MM-DD)
describe('validateDatForm',()=>{
    test('Check card numbers is valid',()=>{
        expect(validateDatForm('2000.01.01')).toBe(true);
        expect(validateDatForm('2000.12.31')).toBe(true);
    })
    test('Check card numbers is invalid',()=>{
        expect(validateDatForm('2000.13.01')).toBe(false);
        expect(validateDatForm('2000.12.32')).toBe(false);
    })
})


            // Phone Number (Format: +99(99)9999-9999)
describe('validatePhoneNum',()=>{
    test('Check phone number is valid',()=>{
        expect(validatePhonNum('+99(99)9999-9999')).toBe(true);
    })
    test('Check phone number is invalid',()=>{
        expect(validatePhonNum('+99(99)9999-999')).toBe(false);
        expect(validatePhonNum('+99(99)99999999)')).toBe(false);
        expect(validatePhonNum('+99(999999-9999')).toBe(false);
        expect(validatePhonNum('99(99)9999-9999)')).toBe(false);
    })
})

              // Number less and equals 255 (positive)
describe('validateNumLessAndEqual',()=>{
    test('Check card numbers is valid',()=>{
        expect(validateNumLessAndEqual('255')).toBe(true);
        expect(validateNumLessAndEqual('0')).toBe(true);
        expect(validateNumLessAndEqual('1')).toBe(true);
    })
    test('Check card numbers is invalid',()=>{
        expect(validateNumLessAndEqual('256')).toBe(false);
        expect(validateNumLessAndEqual('-1')).toBe(false);
    })
})