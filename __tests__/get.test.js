import get from '../src/get.js';

describe('get', () => {
  const obj = { a: [{ b: { c: 3 } }] };

  test('gets nested value (string path)', () => {
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('gets nested value (array path)', () => {
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value', () => {
    expect(get(obj, 'a.b.c', 'default')).toBe('default');
  });

  test('handles null object', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
  });
});