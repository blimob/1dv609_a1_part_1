import { User } from '../src/User.js'
import { expect, jest } from '@jest/globals'

describe('User class, test suit', () => {
  const helper = (domain) => ({ 
    getDomainName: jest.fn(()=> domain)
   })

  test('constructor throws for non-lnu domain', () => {
    expect(() => new User('aaa', helper('hotmail.se'))).toThrow('Email must be from lnu.se domain')
  })
  
  test('constructor accepts lnu domain', () => {
    
    const email = helper('lnu.se')
    const user = new User('user', email)
  
    expect(user.email).toBe(email)
  })

})