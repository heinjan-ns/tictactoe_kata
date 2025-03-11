import { add } from './math';

describe('math', () => {
  it('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});