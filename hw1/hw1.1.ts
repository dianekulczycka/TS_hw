// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let firstString: string = "hello";
let secondString: string = "owu";
let thirdString: string = "com";
let fourthString: string = "ua";

let firstNum: number = 1;
let secondNum: number = 10;
let thirdNum: number = -999;
let fourthNum: number = 123;
let fifthNum: number = 3.14;
let sixthNum: number = 2.7;
let seventhNum: number = 16;

let firstBool: boolean = true;
let secondBool: boolean = false;

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

let firstName: string = "Diana";
let middleName: string = "Olga";
let lastName: string = "Kulchytska";
let person: string = firstName + "-" + middleName + " " + lastName;
console.log(person); // Diana-Olga Kulchytska

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a: number = 100;
let b: string = "100";
let c: boolean = true;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

let userFirstName: string = prompt("Enter your name: ");
let userMiddleName: string = prompt("Enter your middle name: ");
let userAge: string = prompt("Enter your age: ");

console.log(`User's full name is ${userFirstName} ${userMiddleName} and user supposedly is ${userAge} years old.`);
