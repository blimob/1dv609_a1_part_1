### Table for checking test suite bug coverage
Create a table like this one for all the bugs and Tests, showing which test fails or succeeds for each test and the coverage. Use the table to remove tests that are redundant.

| Version | Correct | BugDoesNotHash | BugDoesNotTrim | BugisPwAlwaysSame | BugMissingNrCheck | BugMissingPwCheck | BugNeverContainsNr | BugToShort Pw | Bug veryShort Pw | BugWrongHashingAlgorithm |
| --- | ---| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Test hash | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Test not trim spaces | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Test pw the same | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Test missing nr check | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Test missing pw check | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Test pw with and without nr | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Test short Pw| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Test veryshort pw | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Test hashingAlgorithm | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌| 
| Coverage | 100% | 100% | 100% | 100% | 93.33% | 93.33% | 41.17% | 94.11% | 100% | 100% |