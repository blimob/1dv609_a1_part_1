
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/MyBug'
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const passwordText = 'password1234'
    //const password = new Password (passwordText)

    test('getPassword Hash Should Trim Spaces For Hashed Comparison', () => {
        const pwWithSpaces = new Password(' ' + passwordText + ' ')
        const actual = pwWithSpaces.getPasswordHash()
        const expectedValue = new Password(passwordText).getPasswordHash()
        expect(actual).toBe(expectedValue)
    })
    
    test('isPassword Same Should Return False For Different Passwords', () => {
        const password1 = new Password('password1234')
        const password2 = new Password('asdfghjkl1234')
        expect(password1.isPasswordSame(password2)).toBeFalsy()
    })
    
    test('isPassword Same Should Throw For Non Password Argument', () => {
        expect(() => new Password(passwordText).isPasswordSame('other'))
            .toThrow('Invalid argument')
    })
    
    test('constructor Should Throw For Missing Number', () => {
        expect(() => new Password('passwordHejhej')).toThrow('No number found')
    })
    
    test('constructor Should Throw For Too Short Password', () => {
        expect(() => new Password('hej123')).toThrow('Too short password')
    })
    
    test('constructor Should Not Throw When Number Exists', () => {
        expect(() => new Password('hejhejhej123')).not.toThrow('No number found')
    })
    
    test('constructor Should Throw For Too Short And Very Short Passwords', () => {
        expect(() => new Password('hejhejhejh1')).toThrow('Too short password')
        expect(() => new Password('hej2j1')).toThrow('Too short password')
    })
    
    test('getPassword Hash Should Match Calculated Hash For Correct Algorithm', () => {
        const password = new Password(passwordText)
        let hash = 7
        for (let i = 0; i < passwordText.length; i++) {
            hash = hash * 31 + passwordText.charCodeAt(i)
        }
        expect(password.getPasswordHash()).toBe(hash)
    })


    // test('Bug:WrongMessage', () => {
    //    expect(() => new Password('password').toBe('Too short password'))
    // })
})