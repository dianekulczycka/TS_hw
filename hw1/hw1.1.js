// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
var firstString = "hello";
var secondString = "owu";
var thirdString = "com";
var fourthString = "ua";
var firstNum = 1;
var secondNum = 10;
var thirdNum = -999;
var fourthNum = 123;
var fifthNum = 3.14;
var sixthNum = 2.7;
var seventhNum = 16;
var firstBool = true;
var secondBool = false;
// Вивести кожну змінну за допомогою: console.log
console.log(firstString);
console.log(secondString);
console.log(thirdString);
console.log(fourthString);
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);
console.log(fifthNum);
console.log(sixthNum);
console.log(seventhNum);
console.log(firstBool);
console.log(secondBool);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var firstName = "Diana";
var middleName = "Olga";
var lastName = "Kulchytska";
var person = firstName + "-" + middleName + " " + lastName;
console.log(person); // Diana-Olga Kulchytska
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
var a = 100;
var b = "100";
var c = true;
console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль
var userFirstName = prompt("Enter your name: ");
var userMiddleName = prompt("Enter your middle name: ");
var userAge = prompt("Enter your age: ");
console.log("User's full name is ".concat(userFirstName, " ").concat(userMiddleName, " and user supposedly is ").concat(userAge, " years old."));
