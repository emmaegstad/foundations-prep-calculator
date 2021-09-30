// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { sub } from '../calculations.js';
import { mult } from '../calculations.js';
import { div } from '../calculations.js';
import { mod } from '../calculations.js';

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

test('test mult function', (expect) => {
  //Arrange
  const input1 = 5;
  const input2 = 5;
  const expected = 25;

  //Act
  const actual = mult(input1, input2);

  //Assert
  expect.equal(actual, expected);

});

test('test div function', (expect) => {
  //Arrange
  const input1 = 16;
  const input2 = 4;
  const expected = 4;

  //Act
  const actual = div(input1, input2);

  //Assert
  expect.equal(actual, expected);

});

test('test mod function', (expect) => {
  //Arrange
  const input1 = 27;
  const input2 = 4;
  const expected = 3;

  //Act
  const actual = mod(input1, input2);

  //Assert
  expect.equal(actual, expected);

});