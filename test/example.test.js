// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { sub } from '../calculations.js';

const test = QUnit.test;

test('test add function', (expect) => {
  //Arrange
  const input1 = 3;
  const input2 = 2;
  const expected = 5;

  //Act
  const actual = add(input1, input2);

  //Assert
  expect.equal(actual, expected);
});

test('test sub function', (expect) => {
  //Arrange
  const input1 = 100;
  const input2 = 40;
  const expected = 60;

  //Act
  const actual = sub(input1, input2);

  //Assert
  expect.equal(actual, expected);

});