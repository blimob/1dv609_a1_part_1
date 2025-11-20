// import { SSNHelper } from '../src/correct/SSNHelper'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper  } from '../src/bugs/BuggySSNHelperAllowMonth0'
import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'

describe('SSNHelpe Tests', () => {

    test('isValidDay returns true for upper boundary 31', () => {
        const helper = new SSNHelper()
        expect(helper.isValidDay('31')).toBe(true)
    })

    test('isValidMonth return false for lower boundary 0', () => {
        const helper = new SSNHelper()
        expect(helper.isValidMonth('0')).toBeFalsy()
    })
});