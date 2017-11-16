import Dog from './dog'

test('Dog.bark', () => {
  const testDog = new Dog('test')
  expect(testDog.bark()).toBe('Wooh, wooh!, My name is test.')
})
