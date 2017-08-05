const assert = require('assert');

const countNumber = (number) => {

  const onesAndTeensDictionary = {
    0: '',
    1: 'one',
    3: 'three',
    7: 'seven',
  };

  const twentyAndAbove = {
    0: '',
    20: 'twenty',
    30: 'thirty'
  }

  const tens = [50, 40, 30, 20];

  const tensNumber = tens.filter((x) => {
    return number - x < 10 && number - x >= 0 ;
  });

  let bigNumber = tensNumber[0];
  bigNumber ? number = number - bigNumber : bigNumber = 0;
  let numberWord = twentyAndAbove[bigNumber] + onesAndTeensDictionary[number];
  return numberWord.length;

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
});
