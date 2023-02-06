let a = 10;
let b = 32;
function sum1(a, b) {
  a *= 2;
  console.log(a + b);
}

sum1(a, b);
console.log(a);
//передача аргументов по ссылке
const someUser = {
  firstName: "Петр",
  lastName: "Сидоров",
};

function UserName(user) {
  user.firstName = "Алекснадр";
}

UserName(someUser);
console.log(someUser.firstName); //при передаче ссылки изменяется внешний объект
//для сохранения объекта создается его копия
function UserName1(user) {
  const copyUser = Object.assign({}, user); //создали копию объекта
  copyUser.firstName = "михаил"; //изменили значкение свойства
  return copyUser; //возвращаем копию объекта
}

const upUser = UserName1(someUser); //обновленный
console.log(someUser.firstName); //петр
console.log(upUser.firstName); //михаил

let d = 7;
function sum2(r) {
  let b = 8;
  console.log(r + b);
}

sum2(d); //15
console.log(d);
console.log(b);

//работа с аргументами arguments
function myFn() {
  console.log(Array.isArray(arguments)); //проверка явл ли аргумент обычным(фщолс)
  console.log(arguments.length); //0
}
myFn();

function sum3() {
  const num1 = arguments[0];
  const num2 = arguments[1];
  console.log(num1 + num2);
}

sum3(3, 4);

function sum4() {
  let sum4 = 0;
  for (let i = 0, length = arguments.length; i < length; i++) {
    if (typeof arguments[i] === "number") {
      sum4 += arguments[i];
    }
  }
  console.log(sum4);
}
sum4(45, 78, 1);
sum4("", 34, 56, "", 5, "56,null");

//использование цикла for of
function sum5() {
  let sum5 = 0;
  for (argument of arguments) {
    if (typeof arguments === "number") {
      sum5 += arguments;
    }
  }
  console.log(sum5);
}
sum5(45, 78, 1);
sum5("", 34, 56, "", 5, "56,null");

//преобр аргумент в обычный
function names() {
  const args = Array.from(arguments);
  console.log(args);
}

names("даша", "паша", "иван");
//колбэк функции - обычная функция которая вызывается внутри другой функции
function cb() {
  console.log("colback");
}

function cbFn(fnCb) {
  console.log("принимаю колбэк функцию");
  fnCb(); //будет принимать колбэк фуну=кцию
}
cbFn(cb);

function setColor() {
  document.body.style.backgroundColor = "#43ff40";
}

setTimeout(setColor, 1000);

//возврат значения

function sum6(a, b) {
  return a + b;
  console.log(a + b); //данная строка игнорируется
}
console.log(sum6(34, 4));
let ab = sum6(67, 8);
console.log(ab);
