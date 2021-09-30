//import functions
import { add } from './calculations.js';

// reference necessary DOM elements
const addNum1 = document.querySelector('.calc-add__num1');
const addNum2 = document.querySelector('.calc-add__num2');
const addButt = document.querySelector('.calc-add__button');
let addAnswer = document.querySelector('.calc-add__answer');

//set event listeners
addButt.addEventListener('click', () => {
  const num1 = Number(addNum1.value);
  const num2 = Number(addNum2.value);
  const sum = add(num1, num2);
  addAnswer.textContent = sum;
});