const removeSNames = require('./app');

describe('removeSNames', () => {

  it('should remove all S names', () => {
    const names = ['Apple', 'Strawberry', 'Star fruit'];
    expect(removeSNames(names)).not.toContain('Strawberry');
    expect(removeSNames(names)).not.toContain('Star fruit');
  });

  it('should not remove other names', () => {
    const names = ['Apple', 'Strawberry', 'PineApple'];
    expect(removeSNames(names)).toContain('Apple');
    expect(removeSNames(names)).toContain('PineApple');
  });

  it('should mind the case', () => {
    const names = ['Apple', 'Strawberry', 'PineApple', 'strawberry'];
    expect(removeSNames(names)).not.toContain('Strawberry');
    expect(removeSNames(names)).not.toContain('strawberry');
  });
});
