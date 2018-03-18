import { sumAll, diffArray, convertToRoman } from './intermChallengeFuncs';

// CHALLENGE 1: Tests for sumAll()
test('should sum all nums between 2 and 5 to be 14', () => {
  expect(sumAll([2, 5])).toBe(14);
});

test('should sum all nums between 1 and 6 to be 21', () => {
  expect(sumAll([1, 6])).toBe(21);
});

// CHALLENGE 2: Test for diffArray ==> compare 2 arrays and make array of differences
test('should compare 2 arrays and show differences', () => {
  expect(diffArray([1, 2, 3, 4, 5], [1, 3, 5])).toEqual([2, 4]);
});

// CHALLENGE 3: Convert any positive number to a Roman Numeral
test('any positive integer should convert to a Roman Numeral', () => {
  expect(convertToRoman(45)).toBe('XLV');
});
test('any pos int should convert to a Roman Numeral', () => {
  expect(convertToRoman(3578)).toBe('MMMDLXXVIII');
});
