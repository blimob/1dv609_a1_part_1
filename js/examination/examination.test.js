//You are going to write tests for the examination.js 

// import { Password } from "./examination.js"; // Uncomment when Password class is added
import { MusicTrack } from '../examination/examination.js'
import { expect, jest } from '@jest/globals'

describe('Music SUT', () => {
    test('placeholder', () => {
        expect(false).toBe(false);
    });

    test('Constructor Should Throw On empty Title', () => {
        expect(() => new MusicTrack('')).toThrow('Title cannot be empty')
    })

    // test('constructor Should Throw For Too Short And Very Short Passwords', () => {
    //     expect(() => new Password('hejhejhejh1')).toThrow('Too short password')
    //     expect(() => new Password('hej2j1')).toThrow('Too short password')
    // })
});