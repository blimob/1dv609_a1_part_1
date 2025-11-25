| SUT | Test | CorrectSweSecNr | BuggySwedishSocialSecurityNumberNoLenCheck | BuggySwedishSocialSecurityNumberNoTrim | BuggySwedishSocialSecutityNumberNoLuhn | BuggySwedishSocialSecutityNumberWrongYear |
| --- | ---| --- | --- | --- | --- | --- |
| SwedishSocialSecurityNumber | Constructor Should Throw For Incorrect Length| ✅ | ✅ | ✅ | ✅ | ✅ |
| SwedishSocialSecurityNumber | Constructor Should Throw For Incorrect Format | ✅ | ❌ | ✅ | ✅ | ✅ |
| SwedishSocialSecurityNumber | Constructor Should Throw For Incorrect Month | ✅ | ✅ | ❌ | ✅ | ✅ |
| SwedishSocialSecurityNumber | Constructor Should Throw For Incorrect Day | ✅ | ✅ | ✅ | ✅ | ❌ |
| SwedishSocialSecurityNumber | constructor Should TrimSpaces ForInputWithLeadingAndTrailingSpaces | ✅ | ✅ | ✅ | ✅ | ✅ |
| SwedishSocialSecurityNumber | Constructor Should luhn the SocialSecurityNumber | ✅ | ❌ | ❌ | ❌ | ✅ |
| SwedishSocialSecurityNumber | getYear Should Return Correct Year | ✅ | ✅ | ✅ | ✅ | ✅ |
| SwedishSocialSecurityNumber | getSerialNumber Should Return Correct Number | ✅ | ✅ | ✅ | ✅ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 93.33% | 93.33% | 41.17% | 94.11% | 

| SUT | Test | CorrectSweSecNr | BuggySSNHelperAllowDayUpTo30 | BuggySSNHelperAllowMonth0 | BuggySSNHelperIncorrectFormat | BuggySSNHelperMessyLuhn | BuggySSNHelperWrongLength |
| --- | ---| --- | --- | --- | --- | --- | --- |
| SSNHelper | isValidDay Should Return True For Boundary | ✅ | ✅ | ✅ | ✅ | ✅ | |
| SSNHelper | isValidMonth Should Return False For Month Zero | ✅ | ❌ | ✅ | ✅ | ✅ | |
| SSNHelper | isCorrectFormat Should Return False For Missing Dash | ✅ | ✅ | ❌ | ✅ | ✅ | |
| SSNHelper | luhnisCorrect Should Return False For Incorrect Luhn Number | ✅ | ✅ | ✅ | ✅ | ❌ | |
| SSNHelper | isCorrectLength Length Should Return False For Too Long Input | ✅ | ✅ | ✅ | ✅ | ✅ | |
| SSNHelper | isCorrectLength Length Should Return False For Too Short Input | ✅ | ❌ | ❌ | ❌ | ✅ | |
| Coverage | 100% | 100% | 100% | 100% | 93.33% | 93.33% | 41.17% | 94.11% | |