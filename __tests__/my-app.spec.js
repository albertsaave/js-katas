import App from '../src/my-app.js';

test('something', () => {
  expect(true).toBe(true);
});

test('Empty string returns zero', () => {
  expect(App.add('')).toBe(0);
})

test('Single variable within a string returns that amount', () => {
  expect(App.add('1')).toBe(1)
})

test('string 3 should return 3', () => {
  expect(App.add('3')).toBe(3)
})

test('adds up values if two comma separated numbers are given', () => {
  expect(App.add('1,2')).toBe(3)
})

test('add up values if three comma separated nubmers are given', () => {
  expect(App.add('1,2,3')).toBe(6)
})

test('add up values of , separated numbers in lines separated by \n', () => {
  expect(App.add('1,2,3\n4\n6,7')).toBe(23)
})
