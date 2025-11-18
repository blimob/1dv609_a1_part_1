
// Select one of the Password versions to test

import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
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
    });

    test('return not hashed password', () => {
        const actual = password.getPasswordHash()
        expect(actual).toBe(passwordText)
    })

    test('return if password is same or not', () => {
        expect(() => {
            new Password('Password')
        }).toThrow('')
        
    })
});