                     // Credit card number (8-16 digits)

// ^      --> start of string
// \d     --> only digit
// {8,16} --> it means for 8 to 16
// $      --> it means end string

const validateTestNumCart = (text) => {
    const pattern = /^\d{8,16}$/;
    return pattern.test(text);
}

                     // Date (Format: DD.MM.YYYY)
//(0[1-9]|[12][0-9]|3[01]) --> day 01–31
//(0[1-9]|1[0-2])          --> month 01–12
//\.                       --> literal dot character

const validateDateForm =(text)=>{
    const pattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return pattern.test(text);
}
                     // Date (Format: YYYY-MM-DD)

const validateDatForm =(text)=> {
    const pattern = /^\d{4}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/;
    return pattern.test(text);
                     }

                     // Phone Number (Format: +99(99)9999-9999)
// \+          --> plus sign +
//\( and \)    --> parentheses around area code
//-            --> hyphen separator
//

const validatePhonNum =(text)=> {
    const pattern = /^\+\d{2}\(\d{2}\)\d{4}-\d{4}$/;
    return pattern.test(text);
}

                   // Number less and equals 255 (positive)


const validateNumLessAndEqual =(text)=>{
    const pattern = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;
    return pattern.test(text);
}
module.exports = { validateTestNumCart, validateDateForm, validateDatForm, validatePhonNum, validateNumLessAndEqual };