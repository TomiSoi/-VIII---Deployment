import compact from '../src/compact.js';

describe('compact', () => {
  test('removes falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('all falsy values', () => {
    expect(compact([false, null, 0])).toEqual([]);
  });
});