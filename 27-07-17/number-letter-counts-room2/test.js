const assert = require('assert');

const countNumber = (num) => {
  const onesAndTeens = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8]; 
  const twentyPlus = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6]; 
  const ones = num % 10; 
  const tens = parseInt(num / 10); 
  const hundreds = parseInt(tens / 10); 
  const remains = num % 100; 
  
  if (num === 1000) return 11; 
  if (tens === 1) { 
    return onesAndTeens[num]; 
  } 
  if (tens > 9) { 
    const wholeNumber = remains ? 10 : 7;
    return countNumber(hundreds) + wholeNumber + countNumber(remains); 
  } 
  return twentyPlus[tens] + onesAndTeens[ones]; 
}; 

const sumAll = function (num) { 
  if ([...arguments].some(n => n < 1 || n > 1000)) { 
    throw new Error("Number out of range"); 
  } 
  const finish = arguments[1] || num; 
  const start = (arguments[1]) ? num : 1; 
  return Array.from(Array(finish - start + 1), (_,i) => i + start) .reduce((a, c) => a + countNumber(c), 0); 
};


describe('Number Letter Counts', function() {
  it('returns three when when the number is 1', () => {
    const expected = 3;
    const actual = countNumber(1);

    assert.equal(actual, expected);
  });

  it('returns five when the number is three', () => {
    const expected = 5;
    const actual = countNumber(3);

    assert.equal(actual, expected);
  });

  it('returns five when the number is seven', () => {
    const expected = 5;
    const actual = countNumber(7);

    assert.equal(actual, expected);
  });

  it('return six when the number is twenty', () => {
    const expected = 6;
    const actual = countNumber(20);

    assert.equal(actual, expected);
  });

  it('return nine when the number is twenty one', () => {
    const expected = 9;
    const actual = countNumber(21);

    assert.equal(actual, expected);
  });

  it('return eleven when the number is twenty three!', () => {
    const expected = 11;
    const actual = countNumber(23);

    assert.equal(actual, expected);
  });

  it('return six when the number is thirty', () => {
    const expected = 6;
    const actual = countNumber(30);

    assert.equal(actual, expected);
  });

  it('return eleven when the number is thirty three', () => {
    const expected = 11;
    const actual = countNumber(33);

    assert.equal(actual, expected);
  });

  it('return 10 when the number is one hundred', () => {
    const expected = 10;
    const actual = countNumber(100);

    assert.equal(actual, expected);
  });

  it('return 16 when the number is one hundred and one', () => {
    const expected = 16;
    const actual = countNumber(101);

    assert.equal(actual, expected);
  });

  it('return 21 when the number is one hundred and thirteen', () => {
    const expected = 21;
    const actual = countNumber(113);

    assert.equal(actual, expected);
  });

  it('given a range it returns the sum of the letter counts', () => {
    const expected = 11;
    const actual = sumAll(1,3);

    assert.equal(actual, expected);
  });

  it('given a range starting at a number other than one it returns the correct number count', () => {
    const expected = 12;
    const actual = sumAll(2,4);

    assert.equal(actual, expected);
  });
  
  it('count letter from one to 99', () => {
    const expected = 854;
    const actual = sumAll(99);

    assert.equal(actual, expected);
  });

  it('count letter from one to 1000', () => {
    const expected = 21124;
    const actual = sumAll(1000);

    assert.equal(actual, expected);
  });
});
