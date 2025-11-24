import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
import { jest } from '@jest/globals'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    const helper = {
        isCorrectLength: jest.fn(),
        isValidMonth: jest.fn(),
        isValidDay: jest.fn(),
        isCorrectFormat: jest.fn(),
        luhnisCorrect: jest.fn()
    }
    const newSecurityNr = ('990824-3684')

    test('Constructor Should Throw For Incorrect Length', () => {
        helper.isCorrectLength.mockReturnValue(false)
        expect(() =>
        new SwedishSocialSecurityNumber('9701-1234', helper)
    ).toThrow()
    })

    test('constructor Should TrimSpaces ForInputWithLeadingAndTrailingSpaces', () => {
        helper.isCorrectLength.mockReturnValue(true)
        new SwedishSocialSecurityNumber(' 990824-3684 ', helper)
        expect(helper.isCorrectLength).toHaveBeenCalledWith('990824-3684')
     })
});

