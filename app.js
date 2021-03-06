//import functions
import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mult } from './calculations.js';
import { div } from './calculations.js';
import { mod } from './calculations.js';
import { int } from './calculations.js';
import { pt } from './calculations.js';

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

const modNum1 = document.querySelector('.calc-mod__num1');
const modNum2 = document.querySelector('.calc-mod__num2');
const modButt = document.querySelector('.calc-mod__button');
let modAnswer = document.querySelector('.calc-mod__answer');

const intNum1 = document.querySelector('.calc-int__num1');
const intNum2 = document.querySelector('.calc-int__num2');
const intButt = document.querySelector('.calc-int__button');
let intAnswer = document.querySelector('.calc-int__answer');

const ptNum1 = document.querySelector('.calc-pt__num1');
const ptNum2 = document.querySelector('.calc-pt__num2');
const ptButt = document.querySelector('.calc-pt__button');
let ptAnswer = document.querySelector('.calc-pt__answer');


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

modButt.addEventListener('click', () => {
  const num1 = Number(modNum1.value);
  const num2 = Number(modNum2.value);
  const answer = mod(num1, num2);
  modAnswer.textContent = answer;
});

intButt.addEventListener('click', () => {
  const num1 = Number(intNum1.value);
  const num2 = Number(intNum2.value);
  const answer = int(num1, num2);
  intAnswer.textContent = answer;
});

ptButt.addEventListener('click', () => {
  const num1 = Number(ptNum1.value);
  const num2 = Number(ptNum2.value);
  const answer = pt(num1, num2);
  ptAnswer.textContent = answer;
});

