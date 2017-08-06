const assert = require('assert');

const countNumber = (number) => {


  let bigNumber;
  let numberWord;
  let numberRange;
  let numberString;
  let numberArray;
  const onesAndTeensDictionary = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  const twentyAndAbove = {
    0: '',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  const tens = [90, 80, 70, 60, 50, 40, 30, 20];

  const range = (arr) => {
    let returnArr = [];

    for (let i = parseInt(arr[0]); i <= parseInt(arr[1]); i += 1) {
        returnArr.push(i);
    }
    return returnArr;
  };

  numberString = number.toString();
  numberArray = numberString.split(',');
  numberRange = (numberArray.length > 1) ? range(numberArray) : [...numberArray];

  let c = numberRange.map( (currentValue) => {
    const tensNumber = tens.filter((n) => {
      return currentValue - n < 10 && currentValue - n >= 0 ;
    });
    bigNumber = tensNumber[0]; // 20, 30, 40 or 50 if number is over 20
    bigNumber ? currentValue = currentValue - bigNumber : bigNumber = 0;
    numberWord = twentyAndAbove[bigNumber] + onesAndTeensDictionary[currentValue];
    return numberWord.length;
  });
  return c.reduce( (sum, value) => {
    return sum + value; 
  });
}
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

  it('given a range it returns the sum of the letter counts', () => {
    const expected = 11;
    const actual = countNumber('1, 3');

    assert.equal(actual, expected);
  });
  
  it('count letter from one to 99', () => {
    const expected = 854;
    const actual = countNumber('1, 99');

    assert.equal(actual, expected);
  });
});
