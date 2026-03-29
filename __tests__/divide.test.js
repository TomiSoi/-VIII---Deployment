import divide from '../src/divide.js';

describe('divide', () => {
  test('divides numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('division by zero', () => {
    expect(divide(5, 0)).toBe(Infinity);
  });

  test('division by 1', () => {
    expect(divide(5, 1)).toBe(5);
  });
});