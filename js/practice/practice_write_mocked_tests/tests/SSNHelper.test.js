// import { SSNHelper } from '../src/correct/SSNHelper'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper  } from '../src/bugs/BuggySSNHelperAllowMonth0'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'

describe('SSNHelpe Tests', () => {
    const helper = new SSNHelper()

    test('isValidDay Should Return True For Boundary 31', () => {
        expect(helper.isValidDay('31')).toBe(true)
    })

    test('isValidMonth Should Return False For Month Zero', () => {
        expect(helper.isValidMonth('0')).toBeFalsy()
    })

    test(' isCorrectFormat Should Return False For Missing Dash', () => {
        const actual = helper.isCorrectFormat('9009212334')
        expect(actual).toBeFalsy()
    })
});