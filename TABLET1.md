### Table for checking test suite bug coverage
Create a table like this one for all the bugs and Tests, showing which test fails or succeeds for each test and the coverage. Use the table to remove tests that are redundant.

### Table for checking test suite bug coverage (Password)

| SUT | Test Name | Correct | BugDoesNotHash | BugDoesNotTrim | BugisPasswordAlwaysSame | BugMissingNumberCheck | BugMissingPasswordCheck | BugNeverContainsNumbers | BugToShortPassword | BugVeryShort | BugWrongHashingAlgorithm | BugWrongMessage | MyBug |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Password | getPasswordHashShouldTrimSpacesForHashedComparison | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Password | isPasswordSameShouldReturnFalseForDifferentPasswords | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Password | isPasswordSameShouldThrowForNonPasswordArgument | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Password | constructorShouldThrowForMissingNumber | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Password | constructorShouldThrowForTooShortPassword | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Password | constructorShouldNotThrowWhenNumberExists | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Password | constructorShouldThrowForTooShortAndVeryShortPasswords | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |
| Password | getPasswordHashShouldMatchCalculatedHashForCorrectAlgorithm | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| Coverage |100%| 100% | 100%  | 100% | 93.33 | 93.33% | 41.17% | 100% | 94.11% | 100% | 100% | 100% | 100% | 