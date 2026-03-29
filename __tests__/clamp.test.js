import clamp from '../src/clamp.js';

describe('clamp', () => {
  test('returns number within range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  test('clamps below lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('clamps above upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('handles NaN inputs', () => {
    expect(clamp(NaN, 0, 10)).toBeNaN();
  });
});