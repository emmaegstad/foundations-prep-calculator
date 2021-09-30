//import functions
import { add } from './calculations.js';
import { sub } from './calculations.js';

// reference necessary DOM elements
const addNum1 = document.querySelector('.calc-add__num1');
const addNum2 = document.querySelector('.calc-add__num2');
const addButt = document.querySelector('.calc-add__button');
let addAnswer = document.querySelector('.calc-add__answer');

const subNum1 = document.querySelector('.calc-sub__num1');
const subNum2 = document.querySelector('.calc-sub__num2');
const subButt = document.querySelector('.calc-sub__button');
let subAnswer = document.querySelector('.calc-sub__answer');



//set event listeners
addButt.addEventListener('click', () => {
  const num1 = Number(addNum1.value);
  const num2 = Number(addNum2.value);
  const sum = add(num1, num2);
  addAnswer.textContent = sum;
});

subButt.addEventListener('click', () => {
  const num1 = Number(subNum1.value);
  const num2 = Number(subNum2.value);
  const diff = sub(num1, num2);
  subAnswer.textContent = diff;
});

