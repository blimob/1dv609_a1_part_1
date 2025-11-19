
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
 import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const emptyPassword = '';
    const passwordText = 'password1234'
    const password = new Password (passwordText)

    test('replace this test with one of your own and add more', () => {
        expect(true).toBe(true);
    })

    test('return not hashed password', () => {
        const hashPassword = password.getPasswordHash()
        expect(passwordText).not.toBe(hashPassword)
    })

    test('does not trim spaces', () => {
        const pwWithSpaces = new Password (' ' + passwordText + ' ')
        const actual = pwWithSpaces.getPasswordHash()
        const expected = password.getPasswordHash()
        expect(actual).toBe(expected)
    })

    test('does not treat different passwords as the same', () => {
        const password1 = new Password('password1234')
        const password2 = new Password('asdfghjkl1234')
        expect(password1.isPasswordSame(password2)).toBeFalsy()
    })

    test('Bug:Missing number check', () => {
        expect(() => new Password('passwordHejhej')).toThrow('No number found')
    })

    test('Bug:Missing password check', () => {
        expect(() => new Password ('hej123')) 
        .toThrow('Too short password')
    })

    // test('return if password is same or not', () => {
    //     expect(() => {
    //         new Password('Password')
    //     }).toThrow('')
        
    // })

    // test('return if password is not the same', () => {
    //     const newPassword = new Password('1234567890123')
    //     const actual = password.isPasswordSame(newPassword)
    //     expect(actual).toBeFalsy()
    // })


    // test('password to short', () => {
    //     expect(() => {
    //         new Password('test12')
    //     }).toThrow('Too short password')
    // })
});