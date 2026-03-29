import difference from '../src/difference.js';

describe('difference', () => {
  test('basic difference', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test('empty array', () => {
    expect(difference([], [1, 2])).toEqual([]);
  });

  test('non-array input', () => {
    expect(difference(null, [1, 2])).toEqual([]);
  });
});