import drop from '../src/drop.js';

describe('drop', () => {
  test('drops first element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test('drops n elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  test('drops more than length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  test('drop 0 elements', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('handles null array', () => {
    expect(drop(null, 2)).toEqual([]);
  });
});