const sayHello = require('./index');

test('returns greeting message', () => {
  expect(sayHello()).toBe('Hello CI/CD!');
});
