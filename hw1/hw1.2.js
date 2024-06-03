var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю,
// виведіть 'Вірно', інакше виведіть 'Невірно'.
var firstX = Number(prompt("Enter a number (not necessary int):"));
var answer = firstX !== 0;
console.log(answer);
//  Перевірте скрипт при a, що дорівнює 1, 0, -3
var arrayOfXs = [1, 0, -3];
if (arrayOfXs[0] !== 0) {
    console.log("True");
}
else {
    console.log("False");
}
if (arrayOfXs[1] !== 0) {
    console.log("True");
}
else {
    console.log("False");
}
if (arrayOfXs[2] !== 0) {
    console.log("True");
}
else {
    console.log("False");
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
var time = Number(prompt("Enter an int between 0 and 59:"));
if (time > 0 && time <= 14) {
    console.log("First quarter");
}
else if (time > 14 && time <= 29) {
    console.log("Second quarter");
}
else if (time > 29 && time <= 44) {
    console.log("Third quarter");
}
else if (time > 45 && time <= 59) {
    console.log("Fourth quarter");
}
else {
    console.log("Not a number!");
}
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
var day = Number(prompt("Enter an int between 1 and 31:"));
if (day > 0 && day <= 10) {
    console.log("First decade");
}
else if (day > 10 && day <= 20) {
    console.log("Second decade");
}
else if (day > 20 && day <= 31) {
    console.log("Third decade");
}
else {
    console.log("Not a number!");
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
var dayOfWeek = Number(prompt("Enter day of week (int from 1 to 7): "));
switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("No such option :(");
        break;
}
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
var numberOne = Number(prompt("Enter a number: "));
var numberTwo = Number(prompt("Enter a second number: "));
if (numberOne > numberTwo) {
    console.log(numberOne);
}
else if (numberOne < numberTwo) {
    console.log(numberTwo);
}
else if (numberOne === numberTwo) {
    console.log("Numbers are even! ".concat(numberOne));
}
else {
    console.log("Not a number!");
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null
// і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"
//  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//  тобто ті, які приводиться до false, а це 0 null undefined і тд).
var secondX;
secondX = secondX || "default";
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super!");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super!");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super!");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super!");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super!");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super!");
}
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу,
var array = [1, 2, 3, 4, 5, 6, 7, 8, null, "hello"];
// вивести кожен елемент в консоль
console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array[2]); // 3
console.log(array[3]); // 4
console.log(array[4]); // 5
console.log(array[5]); // 6
console.log(array[6]); // 7
console.log(array[7]); // 8
console.log(array[8]); // null
console.log(array[9]); // hello
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
var crimeAndPunishment = {
    title: "Crime and Punishment",
    pageCount: 492,
    genre: "Psychological Fiction"
};
var castleToCastle = {
    title: "Castle to Castle",
    pageCount: 315,
    genre: "Novel"
};
var winnieThePooh = {
    title: "Winnie-the-Pooh",
    pageCount: 168,
    genre: "Children's Literature"
};
var Book = /** @class */ (function () {
    function Book(title, pageCount, genre) {
        this._title = title;
        this._pageCount = pageCount;
        this._genre = genre;
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (value) {
            this._genre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "pageCount", {
        get: function () {
            return this._pageCount;
        },
        set: function (value) {
            this._pageCount = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var crimeAndPunishmentOverride = new Book("Crime and Punishment", 492, "Psychological Fiction");
var castleToCastleOverride = new Book("Castle to Castle", 315, "Novel");
var winnieThePoohOverride = new Book("Winnie-the-Pooh", 168, "Children's Literature");
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
var goodOmens = {
    title: "Good Omens",
    pageCount: 456,
    genre: "Fantasy Comedy",
    authors: {
        1: {
            name: "Neil Gaiman",
            age: 51
        },
        2: {
            name: "Terry Pratchett",
            age: 52
        },
    }
};
var theTalisman = {
    title: "The Talisman",
    pageCount: 646,
    genre: "Dark Fantasy",
    authors: {
        1: {
            name: "Stephen King",
            age: 65
        },
        2: {
            name: "Peter Straub",
            age: 45
        },
    }
};
var blackHouse = {
    title: "Black House",
    pageCount: 625,
    genre: "Horror fiction",
    authors: {
        1: {
            name: "Stephen King",
            age: 65
        },
        2: {
            name: "Peter Straub",
            age: 45
        },
    }
};
var SuperBook = /** @class */ (function (_super) {
    __extends(SuperBook, _super);
    function SuperBook(title, pageCount, genre, authors) {
        var _this = _super.call(this, title, pageCount, genre) || this;
        _this._authors = authors;
        return _this;
    }
    Object.defineProperty(SuperBook.prototype, "authors", {
        get: function () {
            return this._authors;
        },
        set: function (value) {
            this._authors = value;
        },
        enumerable: false,
        configurable: true
    });
    return SuperBook;
}(Book));
var goodOmensOverride = new SuperBook("Good Omens", 456, "Fantasy Comedy", {
    1: {
        name: "Neil Gaiman",
        age: 51
    },
    2: {
        name: "Terry Pratchett",
        age: 52
    },
});
var theTalismanOverride = new SuperBook("The Talisman", 646, "Dark Fantasy", {
    1: {
        name: "Stephen King",
        age: 65
    },
    2: {
        name: "Peter Straub",
        age: 45
    },
});
var blackHouseOverride = new SuperBook("Black House", 625, "Horror fiction", {
    1: {
        name: "Stephen King",
        age: 65
    },
    2: {
        name: "Peter Straub",
        age: 45
    },
});
//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
var users = [
    {
        name: "Alexandr",
        username: "user1",
        password: "qwerty"
    },
    {
        name: "Irina",
        username: "user2",
        password: "abc123"
    },
    {
        name: "Vasiliy",
        username: "user3",
        password: "vasya2001"
    },
    {
        name: "Elena",
        username: "user4",
        password: "slavaukraini"
    },
    {
        name: "Pavel",
        username: "user5",
        password: "admin"
    },
    {
        name: "Marina",
        username: "user6",
        password: "password"
    },
    {
        name: "Olga",
        username: "user7",
        password: "admin123"
    },
    {
        name: "David",
        username: "user8",
        password: "P@ssw0rd"
    },
    {
        name: "Sergey",
        username: "user9",
        password: "1111"
    },
    {
        name: "Oleg",
        username: "user10",
        password: "root"
    },
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
var temps1 = [
    {
        day: "Monday",
        morning: 18,
        afternoon: 24,
        evening: 20
    },
    {
        day: "Tuesday",
        morning: 17,
        afternoon: 23,
        evening: 19
    },
    {
        day: "Wednesday",
        morning: 20,
        afternoon: 25,
        evening: 21
    },
    {
        day: "Thursday",
        morning: 16,
        afternoon: 22,
        evening: 18
    },
    {
        day: "Friday",
        morning: 19,
        afternoon: 26,
        evening: 22
    },
    {
        day: "Saturday",
        morning: 21,
        afternoon: 27,
        evening: 23
    },
    {
        day: "Sunday",
        morning: 18,
        afternoon: 25,
        evening: 20
    }
];
var temps2 = [
    {
        time: "mornings",
        temps: [20, 22, 21, 20, 19, 17, 24]
    },
    {
        time: "afternoons",
        temps: [20, 22, 21, 20, 19, 17, 24]
    },
    {
        time: "evenings",
        temps: [20, 22, 21, 20, 19, 17, 24]
    }
];
