import { addOne, minusOne } from '../utils';

describe('test button component', () => {
  test('util addOne', () => {
    const number = 1;
    const addedNumber = addOne(number);
    expect(addedNumber).toBe(2);
  });

  test('util minusOne', () => {
    const number = 1;
    const minusedNumber = minusOne(number);
    expect(minusedNumber).toBe(0);
  });
});
