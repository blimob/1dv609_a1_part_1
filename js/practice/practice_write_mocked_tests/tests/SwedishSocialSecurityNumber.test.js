import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
import { expect, jest } from '@jest/globals'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    beforeEach(() => {
        helper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }
    })
    // const newSecurityNr = ('990824-3684')

    test('Constructor Should Throw For Incorrect Length', () => {
        helper.isCorrectLength.mockReturnValue(false)
        expect(() =>
        new SwedishSocialSecurityNumber('9701-1234', helper)
    ).toThrow()
    })

    test('Constructor Should Throw For Incorrect Format',() => {
        helper.isCorrectFormat.mockReturnValue(false)
        expect(() =>
        new SwedishSocialSecurityNumber('199507262500', helper)).toThrow()
    })

    test('Constructor Should Throw For Incorrect Month', () => {
        helper.isValidMonth.mockReturnValue(false)
        expect(() => 
        new SwedishSocialSecurityNumber('972322-1122', helper)).toThrow()
    })

    test('Constructor Should Throw For Incorrect Day', () => {
        helper.isValidDay.mockReturnValue(false)
        expect(() => new SwedishSocialSecurityNumber('19990734-1122', helper)).toThrow()
    })

    test('constructor Should TrimSpaces ForInputWithLeadingAndTrailingSpaces', () => {
        helper.isCorrectLength.mockReturnValue(true)
        new SwedishSocialSecurityNumber(' 990824-3684 ', helper)
        expect(helper.isCorrectLength).toHaveBeenCalledWith('990824-3684')
     })

     test('Constructor Should luhn the SocialSecurityNumber', () => {
        helper.luhnisCorrect.mockReturnValue(false)
        expect(()=> 
        new SwedishSocialSecurityNumber('950726-2500', helper)
    ).toThrow()
     })

     test('getYear Should Return Correct Year', () => {
        helper.luhnisCorrect.mockReturnValue(true)
        const validYear = new SwedishSocialSecurityNumber('950726-2500', helper).getYear()
        expect(validYear).toBe('95')
     })

     test('getSerialNumber Should Return Correct Number', () => {
        helper.luhnisCorrect.mockReturnValue(true)
        const validSerialNumber = new SwedishSocialSecurityNumber('950726-2500', helper).getSerialNumber()
        expect(validSerialNumber).toBe('2500')
     })


})
