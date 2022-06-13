/**
 * Эту функцию трогать не нужно
 */

function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

 function isValid(name) {
  const isNotNull = typeof(name) !== "object";
  const isNotUndefined = name !== "undefined";
  const isNotEmpty = name !== "";
  const isNotSpace = !name.includes(" ");
  const isNotShort = name.length >= 4;

  return isNotNull && isNotUndefined && isNotEmpty && isNotSpace && isNotShort;
 }
 
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
