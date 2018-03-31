import {
  sumAll,
  diffArray,
  convertToRoman,
  whatIsInAName,
  myReplace,
  translatePigLatin,
  pairElement,
  fearNotLetter
} from './intermChallengeFuncs';

// CHALLENGE 1: Sum all numbers in a range
// Tests for sumAll()
test('should sum all nums between 2 and 5 to be 14', () => {
  expect(sumAll([2, 5])).toBe(14);
});

test('should sum all nums between 1 and 6 to be 21', () => {
  expect(sumAll([1, 6])).toBe(21);
});

// CHALLENGE 2: Diff Two Arrays
// Test for diffArray ==> compare 2 arrays and make array of differences
test('should compare 2 arrays and show differences', () => {
  expect(diffArray([1, 2, 3, 4, 5], [1, 3, 5])).toEqual([2, 4]);
});

// CHALLENGE 3: Roman Numeral Converter
// Convert any positive number to a Roman Numeral
test('any positive integer should convert to a Roman Numeral', () => {
  expect(convertToRoman(45)).toBe('XLV');
});
test('any pos int should convert to a Roman Numeral', () => {
  expect(convertToRoman(3578)).toBe('MMMDLXXVIII');
});

// CHALLENGE 4: Wherefor art thou
// Look through an array of objects and find the matching objects
// to a provided object's key/value pair
test('should create an array of objects that match provided object kay/value pairs', () => {
  let collection = [
    {
      first: 'Romeo',
      last: 'Montague'
    },
    {
      first: 'Mercutio',
      last: null
    },
    {
      first: 'Tybalt',
      last: 'Capulet'
    }
  ];
  let source = { last: 'Capulet' };
  expect(whatIsInAName(collection, source)).toEqual([
    { first: 'Tybalt', last: 'Capulet' }
  ]);
});

// CHALLENGE 5: Search and Replace
// Find a string in a larger string and replace it with a provided string.
// if the original string to be replaced is capitalized, then the replacement
// string will need to be capitalized too
test('should find string in larger string and replace', () => {
  const originalStr = 'He is Sleeping on the couch';
  const strToRep = 'Sleeping';
  const strToRepWith = 'sitting';
  expect(myReplace(originalStr, strToRep, strToRepWith)).toBe(
    'He is Sitting on the couch'
  );
});

// CHALLENGE 6: Pig Latin
// translate a word into pig latin using the standard rules
test('should translate an english word into pig latin', () => {
  const word = 'firehose';
  expect(translatePigLatin('firehose')).toBe('irehosefay');
});
test('a word that starts with a vowel should translate according to rules', () => {
  expect(translatePigLatin('algorithm')).toBe('algorithmway');
});

// CHALLENGE 7: DNA Pairing
// create a new array matching the provided base with its pair
test('should create an array of matching base pairs', () => {
  expect(pairElement('ATCGA')).toEqual([
    ['A', 'T'],
    ['T', 'A'],
    ['C', 'G'],
    ['G', 'C'],
    ['A', 'T']
  ]);
});

//CHALLENGE 8: Missing Letters
// Find the missing letter in a provided string of
// consecutive alphabetical letters.
test('should identify the missing letter in a string', () => {
  expect(fearNotLetter('abcdefghjklmno')).toBe('i');
});
