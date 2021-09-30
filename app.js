//import functions
import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mult } from './calculations.js';
import { div } from './calculations.js';

// reference necessary DOM elements
const addNum1 = document.querySelector('.calc-add__num1');
const addNum2 = document.querySelector('.calc-add__num2');
const addButt = document.querySelector('.calc-add__button');
let addAnswer = document.querySelector('.calc-add__answer');

const subNum1 = document.querySelector('.calc-sub__num1');
const subNum2 = document.querySelector('.calc-sub__num2');
const subButt = document.querySelector('.calc-sub__button');
let subAnswer = document.querySelector('.calc-sub__answer');

const multNum1 = document.querySelector('.calc-mult__num1');
const multNum2 = document.querySelector('.calc-mult__num2');
const multButt = document.querySelector('.calc-mult__button');
let multAnswer = document.querySelector('.calc-mult__answer');

const divNum1 = document.querySelector('.calc-div__num1');
const divNum2 = document.querySelector('.calc-div__num2');
const divButt = document.querySelector('.calc-div__button');
let divAnswer = document.querySelector('.calc-div__answer');



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

multButt.addEventListener('click', () => {
  const num1 = Number(multNum1.value);
  const num2 = Number(multNum2.value);
  const answer = mult(num1, num2);
  multAnswer.textContent = answer;
});

divButt.addEventListener('click', () => {
  const num1 = Number(divNum1.value);
  const num2 = Number(divNum2.value);
  const answer = div(num1, num2);
  divAnswer.textContent = answer;
});

