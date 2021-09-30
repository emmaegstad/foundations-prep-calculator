export function add(num1, num2) {
  return num1 + num2;
}

export function sub(num1, num2) {
  return num1 - num2;
}

export function mult(num1, num2) {
  return num1 * num2;
}

export function div(num1, num2) {
  return num1 / num2;
}

export function mod(num1, num2) {
  return num1 % num2;
}

export function int(x, y) {
  var result = x / y;
  if (result >= 0)
    return Math.floor(result);
  else
    return Math.ceil(result);
}