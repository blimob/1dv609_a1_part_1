### Table for checking test suite bug coverage
Create a table like this one for all the bugs and Tests, showing which test fails or succeeds for each test and the coverage. Use the table to remove tests that are redundant.

| Version | Correct | BugDoesNotHash | BugDoesNotTrim |  ... | MyCustomBug |
| --- | ---| --- | --- | --- | --- |
| Test name 1 | ✅ | ❌ | ✅ | ✅ | ✅ |
| Test name 2 | ✅ | ✅ | ❌ | ✅ | ✅ |
| Test name 3 | ✅ | ✅ | ❌ | ❌ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 100% |