// import { SSNHelper } from '../src/correct/SSNHelper'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper  } from '../src/bugs/BuggySSNHelperAllowMonth0'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'
 import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'

describe('SSNHelpe Tests', () => {
    const helper = new SSNHelper()

    test('isValidDay Should Return True For Boundary 31', () => {
        expect(helper.isValidDay('31')).toBeTruthy()
    })

    test('isValidMonth Should Return False For Month Zero', () => {
        expect(helper.isValidMonth('0')).toBeFalsy()
    })

    test('isCorrectFormat Should Return False For Missing Dash', () => {
        const actual = helper.isCorrectFormat('9009212334')
        expect(actual).toBeFalsy()
    })

    test('luhnisCorrect Should Return False For Incorrect Luhn Number', () => {
        const actual = helper.luhnisCorrect('950726-2500')
        expect(actual).toBeTruthy()
    })

    test('isCorrectLength Length Should Return False For Too Long Input', () => {
        const helper = new SSNHelper()
        const actual = helper.isCorrectLength('19970930-12345')
        expect(actual).toBeFalsy()
    })

    // test('isCorrectLength Length Should Return False For Too Short Input', () => {

    // })
});