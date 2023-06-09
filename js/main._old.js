// var summation = function (num) {
//   // Code here
//     let summa = 0;
//     for (let i = 1; i <= num; i +=1) {
//         summa += i;
//     }
//     return summa;
// }
// console.log(summation(1));

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here

//    // return
//     // classPoints.reduce((previousValue, point) => {
//     //     // console.log(classPoints.length + 1);
//     //     console.log(previousValue);
//     //     console.log(point);

//     //     return previousValue + point;
//     // }, yourPoints);
//     console.log(classPoints.reduce((previousValue, point) => {
//         // console.log(classPoints.length + 1);
//         console.log(previousValue);
//         console.log(point);

//         return previousValue + point;
//     }, yourPoints));
//     // / classPoints.length + 1 <=  yourPoints;
// }

// console.log(betterThanAverage([2, 3], 5));

// // массив.reduce((previousValue, element, index, array) => {
// //   // Тело коллбек-функции
// // }, initialValue);

// function grow(x) {
//   return x.reduce((previousValue, point) => previousValue * point, 1);
// }

// console.log(grow([4, 1, 1, 1, 4]));

//const otherAngle = (a, b) => 180 - a - b;

// const century = (year) => {
//   const num = year % 100 == 0 ? year / 100 : ~~(year / 100) + 1;
//   return num;
// };

// //const century = (year) => const num = year % 100 == 0 ? year / 100 : ~~(year / 100 + 1);

// // {
// //  return num = year % 100 == 0 ? year / 100 : year / 100 + 1;
// // }
// console.log(century(1799));

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
// }

// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
//   laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// console.log(goals(43, 10, 5));

// function past(h, m, s) {
//   //#Happy Coding! ^_^
// }

// const past = (h, m, s) => h * 360000 + m * 6000 + s * 100;

// function sumArray(array) {
//   if (!Array.isArray(array) || array.length < 2) {
//     return 0;
//   }
//   return [...array].sort((a, b) => a - b).slice(1, -1);
//   // .splice(1, array.length - 2)
//   // .reduce((sum, value) => sum + value, 0);
// }
// console.log(sumArray([3, 5, 2, 1, 55, 67, 43]));

//const enough = (cap, on, wait) => (cap - on - wait >= 0 ? 0 : wait - cap + on);

// console.log(enough(10, 5, 15));

// const invert = (array) => array.map((element) => -element);

// console.log(invert([1, -2, 3, -4, 5]));
// console.log(5);

// const testEven = n => n % 2 === 0;

// console.log(testEven(-4));

// const makeNegative = (num) => (num <= 0 ? num : -num);

// const greet = () => "hello world!";
// console.log(greet());

// const sum = (numbers) => numbers.reduce((total, element) => total + element, 0);

// console.log(sum([]));

// const booleanToString = (b) => b + "";

// console.log(booleanToString(false));

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// function SeriesSum(n) {
//   const array = [0, 1];
//   for (let i = 2; i < n; i++) {
//     // array.push(1 / (array[i - 1] + 3));
//     array.push(1 / (4 + i * 3));
//   }
//   return array.reduce((total, item) => total + item, 0);
// }

//console.log(SeriesSum(0));

// const SeriesSum = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   let total = 1;
//   for (let i = 0; i < n - 1; i++) {
//     total += 1 / (4 + i * 3);
//   }
//   return total.toFixed(2);
// };

// console.log(SeriesSum(1));

// const rentalCarCost = (d) => {
//   let discount;
//   if (d < 3) {
//     discount = 0;
//   } else if (d < 7) {
//     discount = 20;
//   } else {
//     discount = 50;
//   }
//   return d * 40 - discount;
// };

// console.log(rentalCarCost(10));

// const isIsogram = (str) => {
//   const strLowerCase = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str.toLowerCase().indexOf(str.toLowerCase()[i]) !== i) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isIsogram("fDermatoglyphics"));

// const isIsogram = (str) => {
//   //   const strLowerCase = str.toLowerCase();
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (str.toLowerCase().indexOf(str.toLowerCase()[i]) !== i) {
//   //       return false;
//   //     }
//   //   }
//   //   return true;
//   console.log(new Set(str.toLowerCase()).size);
// };
// console.log(isIsogram("asdfA"));

//const isSquare = (n) => Math.sqrt(n) === Math.sqrt(n).Math.round();

// const isSquare = (n) => {
//   console.log(Math.sqrt(n));
//   console.log(Math.sqrt(n).toFixed(0));
//   // return Math.sqrt(n) == Math.sqrt(n).toFixed(0);
//   console.log(Math.sqrt(n)) % 1;
// };
// console.log(isSquare(5));

// const lovefunc = (flower1, flower2) =>
//   (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//   (flower2 % 2 === 0 && flower1 % 2 !== 0);
// console.log(lovefunc(0, 1));

// const number = (busStops) => {
//   let answer = 0;
//   busStops.forEach(function (element) {
//     answer += element[0] - element[1];
//   });
//   return answer;
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );
//const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());

// const doubleChar = (str) => str.map((letter) => letter + letter);
// const doubleChar = (str) => [...str].map((letter) => letter + letter).join("");

// console.log(doubleChar("abcdertret"));

// const squareDigits = (num) =>
//   parseInt(
//     String(num)
//       .split("")
//       .map((number) => number * number)
//       .join(""),
//     10
//   );
// console.log(squareDigits(3212));

// const addBinary = (a, b) => (a + b).toString(2);

// console.log(addBinary(5, 9));
// const addBinary = (a, b) => (a + b).toString(2);

// console.log(addBinary(5, 9));

// const rps = (p1, p2) => {
//   let message;
//   const win1 = ["rock" + "scissors", "scissors" + "paper", "paper" + "rock"];

//   if (p1 === p2) {
//     message = "Draw!";
//   } else if (win1.includes(p1 + p2)) {
//     message = "Player 1 won!";
//   } else {
//     message = "Player 2 won!";
//   }

//   console.log(win1.includes(p1 + p2));
//   return message;
// };

// console.log(rps("rock", "scissors"));

// const firstNonConsecutive = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i];
//     }
//   }
//   return null;
// };

// console.log(firstNonConsecutive([1, 2, 3, 4, 6]));

// const squareSum = (numbers) =>
//   numbers.reduce((total, number) => (total += number * number), 0);

// console.log(squareSum([0, 3, 4, 5]));

// const longest = (s1, s2) =>
//   Array.from(new Set(s1 + s2))
//     .sort()
//     .join("");

// console.log(longest("aretheyhere", "yestheyarehere"));

// const humanYearsCatYearsDogYears = (humanYears) => {
//   const catYears = [0, 15, 24];
//   const dogYears = [0, 15, 24];
//   for (let i = 3; i <= humanYears; i++) {
//     catYears.push(catYears[i - 1] + 4);
//     dogYears.push(dogYears[i - 1] + 5);
//   }

//   return [humanYears, catYears[humanYears], dogYears[humanYears]];
// };

// console.log(humanYearsCatYearsDogYears(10));

// const twiceAsOld = (dadYearsOld, sonYearsOld) =>
//   Math.abs(sonYearsOld * 2 - dadYearsOld);
// console.log(twiceAsOld(36, 7));

// const twiceAsOld = (dadYearsOld, sonYearsOld) =>
//   sonYearsOld * 2 - dadYearsOld >= 0
//     ? sonYearsOld * 2 - dadYearsOld
//     : dadYearsOld - sonYearsOld * 2;

// console.log(twiceAsOld(36, 7));
// a, e, i, o, u

// const getCount = (str) =>
//   [...str].filter((letter) => "aeiou".includes(letter)).length;

// console.log(getCount("abracadabra"));

//const getGrade = (s1, s2, s3) => Math.floor((s1 + s2 + s3) / 3);

// const getGrade = (s1, s2, s3) => {
//   const score = (s1 + s2 + s3) / 3;
//   console.log(score);
//   if (0 <= score && score < 60) {
//     return "F";
//   } else if (60 <= score && score < 70) {
//     return "D";
//   } else if (70 <= score && score < 80) {
//     return "C";
//   } else if (80 <= score && score < 90) {
//     return "B";
//   } else if (90 <= score && score <= 100) {
//     return "A";
//   }
// };
// console.log(getGrade(100, 100, 100));

// const toAlternatingCase = (str) => {
//   let result = "";
//   for (let c of str) {
//     result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
//   }
//   return result;
// };

// String.prototype.toAlternatingCase{
//   const toAlternatingCase = (Str) => {
//  let result = "";
// for (let c of Str) {
// result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
// }
// return result;
// }

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// var foo = "String";

// console.log(navigator.userAgent); //содержит информацию о браузере.

// console.log(navigator.platform); //содержит информацию о ОС

// console.log(screen.width + " x " + screen.height); //разрешение вашего экрана

// console.log(location.toString()); //ваш урл в виде строки

// console.log(frames); //фреймы

// console.log(history); //история браузера

// //window.confirm('BOM');

// var bar = window.prompt();

// if (bar === "Привет") {
//   alert("Привет и тебе от BOM!");
// } else {
//   alert("Пока!");
// }

//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const title = document.querySelector("text");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// console.log(title.innerHTML);
// const title = document.querySelector(".article .title");

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const button = document.querySelector(".my-button");
// let i = 0;
// const oldText = button.innerHTML;
// const handleClick = () => {
//   let newText = oldText + i;
//   button.innerHTML = newText;

//   console.log(newText);
//   i += 1;
// };

// button.addEventListener("click", handleClick);

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   console.log(event.target.nodeName);
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// console.log("First log");
// console.log("Second log");
// console.log("Third log");

// Will run first
// console.log("First log");

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log("Second log");
// }, 2000);

// // Will run second
// console.log("Third log");
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());

// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getDate(): ", date.getDate());

// // Возвращает день недели от 0 до 6
// console.log("getDay(): ", date.getDay());

// // Возвращает месяц от 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Возвращает год из 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Возвращает час
// console.log("getHours(): ", date.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const resp = fetch("https://api.sampleapis.com/presidents/presidents");
// console.log(resp);

// const resp_json = resp
//   .then((data) => data.json())
//   .then((president) => console.log(president))
//   .catch((error) => console.log(error));
// //console.log(resp.json);

// String.prototype.toAlternatingCase = function () {
//   // Define your method here :)
//   let retString = "";
//   for (let i = 0; i < this.length; i++) {
//     retString +=
//       this[i].toUpperCase() === this[i]
//         ? this[i].toLowerCase()
//         : this[i].toUpperCase();
//   }
//   return retString;
// };

// console.log("Hello123456ASSDDF".toAlternatingCase());   'aeiouAEIOU'  if (vowel_list.indexOf(str1[x]) !== -1

// function disemvowel(str) {
//   const arrayVowel = "aeiouAEIOU";
//   return str.method((item) => {
//     if (arrayVowel.indexOf(item) !== -1) {
//       str.splice(str.indexOf(item), 1);
//     }
//   });
// }

// function disemvowel(str) {
//   const arrayVowel = "aeiouAEIOU";
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (arrayVowel.indexOf(str[i]) === -1) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// function disemvowel(str) {
//   let newStr = "";
//   for (const letter of str) {
//     if ("aeiouAEIOU".indexOf(letter) === -1) {
//       newStr += letter;
//     }
//   }
//   return newStr;
// }

// console.log(disemvowel("mamamefugh"));

// function isPangram(string) {
//   let alfavit = "abcdefghijklmnopqrstuvwxyz";
//   for (const letter of string) {
//     alfavit = alfavit.replace(new RegExp(letter, "i"), "");
//   }
//   return alfavit.length === 0;
// }

// console.log(isPangram("The quick brown ox jumps over the lazy dog"));
// function isPangram(string) {
//   const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];

//   return alphabetList.every((letter) => string.toLowerCase().includes(letter));
// }
// function isPangram(string) {
//   return (
//     new Set(
//       string
//         .toLocaleLowerCase()
//         .replace(/[^a-z]/gi, "")
//         .split("")
//     ).size === 26
//   );
// }

// function XO(str) {
//   return (
//     Array.from(str.toLowerCase()).filter((letter) => letter === "o").length ===
//     Array.from(str.toLowerCase()).filter((letter) => letter === "x").length
//   );
// }

// console.log(XO("xooxx"));

// function XO(str) {
//   return (
//     str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
//   );
// }

// function XO(str) {
//   return str.replace(/o/gi, "").length == str.replace(/x/gi, "").length;
// }

// function persistence(num) {
//   let amount = 0;
//   if (num >= 10) {
//     do {
//       const numNew = Array.from(String(num), Number);
//       const res = numNew.reduce((acc, rec) => acc * rec, 1);
//       num = res;
//       amount += 1;
//     } while (num >= 10);
//   }

//   return amount;
// }

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

// function persistence(num) {
//    var times = 0;

//    num = num.toString();

//    while (num.length > 1) {
//      times++;
//      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//    }

//    return times;
// }Math.floor(1.7))

// function litres(time) {
//   return Math.floor(Math.floor(time) / 2);
// }

// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// console.log(litres(3));
// console.log(litres(6.7));
// console.log(litres(11.8));

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
// }

// console.log(reverseWords("This is an example!"));

// n = (-1 + sqrt(1 + 8 * sqrt(m))) / 2;

// function findNb(m) {
//   const n = -1 + Math.sqrt(1 + 8 * Math.sqrt(m));
//   return n % 2 === 0 ? n / 2 : -1;
// }

// console.log(findNb(1071225));
// console.log(findNb(91716553919377));

// var min = function (list) {
//   return [...list].sort((a, b) => a - b)[0];
// };

// var max = function (list) {
//   return [...list].sort((a, b) => b - a)[0];
// };

// console.log(min([4, 6, 2, 1, 9, 63, -10, -1]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

// function solution(string) {
//   let newString = "";
//   for (const letter of string) {
//     newString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)
//       ? letter.replace(letter, " " + letter)
//       : letter;
//   }
//   return newString;
// }
// console.log(solution("camelAasingTset"));
// console.log(solution("identifier"));

// function solution(string) {
//   return string.replace(/([A-Z])/g, " $1");
// }
//console.log(/[A - Z]/);

// []                               -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       console.log("no one likes this");
//       break;

//     case 1:
//       console.log(`${names[0]} likes this`);
//       break;

//     case 2:
//       console.log(`${names[0]} and ${names[1]} like this`);
//       break;

//     case 3:
//       console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
//       break;

//     default:
//       console.log(
//         `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//       );
//   }
// }

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// assert.isTrue(
//   isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
//   "should return true"
// );
// assert.isFalse(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
//   "should return false"
// );
// assert.isFalse(isValidWalk(["w"]), "should return false");
// assert.isFalse(
//   isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
//   "should return false"
// );

// function isValidWalk(walk) {
//   return (
//     walk.join("").replaceAll("n", "").length ===
//       walk.join("").replaceAll("s", "").length &&
//     walk.join("").replaceAll("w", "").length ===
//       walk.join("").replaceAll("e", "").length &&
//     walk.length === 10
//   );
// }

// function isValidWalk(walk) {
//   const walkString = walk.join("");
//   if (walk.length !== 10) {
//     return false;
//   }
//   if (
//     walkString.replaceAll("n", "").length !==
//     walkString.replaceAll("s", "").length
//   ) {
//     return false;
//   }
//   if (
//     walkString.replaceAll("w", "").length !==
//     walkString.replaceAll("e", "").length
//   ) {
//     return false;
//   }
//   return true;
// }

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// );
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

// function findEvenIndex(arr) {
//   let i = 0;
//   do {
//     const arrLeft = arr.slice(0);
//     const arrRight = arrLeft.splice(i);
//     const sumLeft = arrLeft.reduce((total, el) => total + el, 0);
//     const sumRight = arrRight.reduce((total, el) => total + el, -arrRight[0]);
//     if (sumLeft == sumRight) {
//       return i;
//     }
//     i += 1;
//   } while (i < arr.length);

//   return -1;
// }

// findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
//     Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
//     Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
//     Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
//   });
//console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// function high(x) {
//   return x
//     .split(" ")
//     .map((word) =>
//       [...word].reduce(
//         (total, el) => total + "abcdefghijklmnopqrstuvwxyz".indexOf(el),
//         1
//       )
//     );
// }

// function high(x) {
//   const arrayWorld = x.split(" ");
//   const arrayScores = arrayWorld.map((word) =>
//     [...word].reduce(
//       (total, el) => total + "0abcdefghijklmnopqrstuvwxyz".indexOf(el),
//       0
//     )
//   );
//   return arrayWorld[arrayScores.indexOf(Math.max(...arrayScores))];
// }

// high('man i need a taxi up to ubud'), 'taxi');
//     assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
//     assert.strictEqual(high('take me to semynak'), 'semynak');
//     assert.strictEqual(high('aa b'), 'aa');
//     assert.strictEqual(high('b aa'), 'b');
//     assert.strictEqual(high('bb d'), 'bb');
//     assert.strictEqual(high('d bb'), 'd');
//     assert.strictEqual(high('aaa b'), 'aaa');

// console.log(high("man i need a taxi up to ubud"));
// console.log(high("take me to semynak"));
// console.log(high("aa b"));

// function basicOp(operation, value1, value2) {
//   return eval(`${value1} ${operation} ${value2}`);
// }

// console.log(basicOp("+", 4, 7));

// function wave(str) {
//   return [...str].map((item) =>
//     str.replace(new RegExp(item, "i"), item.toUpperCase())
//   );
//   //return [...str].map((item) => item.toUpperCase());
// }

// function wave(str) {
//   return [...str].map((item) => {
//     [...str].splice(str.indexOf(item), 1, item.toUpperCase());
//     console.log(str.indexOf(item));
//     console.log([...str]);
//     return [...str].join("");
//   });
// }

// function wave(str) {
//   const arrWave = [];
//   for (let i = 0; i < str.length; i += 1) {
//     const arrStr = [...str];
//     if ("abcdefghijklmnopqrstuvwxyz".includes(arrStr[i])) {
//       arrStr.splice(i, 1, arrStr[i].toUpperCase());
//       arrWave.push(arrStr.join(""));
//     }
//   }
//   return arrWave;
// }

// console.log(wave("hello"));
// console.log(wave("codewars"));
// console.log(wave("two words"));

// function wave(str) {
//   let result = [];

//   str.split("").forEach((char, index) => {
//     if (/[a-z]/.test(char)) {
//       result.push(
//         str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
//       );
//     }
//   });

//   return result;
// }

// function deleteNth(arr, n) {
//   //const newArr = [];
//   const newArr = arr.reduce((acc) => {
//     item => {
//       for (const iterator of newArr) {
//         if (iterator === item) {
//           acc++;
//           console.log(acc);
//           console.log(item);
//         }
//         if (acc <= n) {
//           newArr.push(item);
//           console.log(newArr);
//         }
//       }
//     };
//   }, 0);
//   return newArr;
// }

// function deleteNth(arr, n) {
//   const newArr = [];
//   arr.map((item) => {
//     if (amountEqualDigit(newArr, item) < n) {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// }

// function deleteNth(arr, n) {
//   const newArr = [];
//   arr.map((item) => {
//     if (
//       newArr.reduce((acc, newItem) => {
//         return newItem === item ? acc + 1 : acc;
//       }, 0) < n
//     ) {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// }

// функция подсчета количества одинакового числа в массиве
// const amountEqualDigit = (newArr, item) =>
//   newArr.reduce((acc, newItem) => {
//     return newItem === item ? acc + 1 : acc;
//   }, 0);

// const amountEqualDigit = (arr, n) => {
//   return arr.reduce((acc, item) => {
//     return item === n ? acc + 1 : acc;
//   }, 0);
// };
// console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]));
// console.log(deleteNth([20, 37, 20, 21], 20));

// console.log(amountEqualDigit([20, 37, 20, 21], 1)); //[20,37,21]
//console.log(amountEqualDigit([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]));

// function sumTwoSmallestNumbers(numbers) {
//   numbers = [...numbers].sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
// function greet(language) {
//   const languages = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso",
//   };
//   return ""`" + languages[language] + "`" + ".Try again."";
// }

// console.log(greet("english"));
// console.log(greet("dutch"));

// const stringToArray = (string) => string.split(" ");

// console.log(stringToArray("Robin Singh"));
// console.log(stringToArray("I love arrays they are my favorite"));
// const simpleMultiplication = (number) =>
//   number % 2 === 0 ? number * 8 : number * 9;

// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(1));
// console.log(simpleMultiplication(8));
// console.log(simpleMultiplication(4));
// console.log(simpleMultiplication(5));

// function comp(array1, array2) {
//   //   const array1Sort = array1.sort((a, b) => a - b).map((a) => a * a);
//   //   const array2Sort = array2.sort((a, b) => a - b);

//   //   return array1Sort.toString() === array2Sort.toString();
//   return (
//     array1
//       .sort((a, b) => a - b)
//       .map((a) => a * a)
//       .toString() === array2.sort((a, b) => a - b).toString()
//   );
// }
// const comp = (array1, array2) =>
//   array1 === null || array2 === null
//     ? false
//     : array1
//         .sort((a, b) => a - b)
//         .map((a) => a * a)
//         .toString() === array2.sort((a, b) => a - b).toString();

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [132, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );
// console.log(comp([], []));

// const validatePIN = (pin) =>
//   pin.length === 4 || pin.length === 6
//     ? [...pin].every((value) => [..."1234567890"].includes(value))
//     : false;

// //const validatePIN = (pin) => pin.length === 4 || pin.length === 6;

// console.log(validatePIN("1234"));
// console.log(validatePIN("12"));
// console.log(validatePIN("123"));
// console.log(validatePIN("123456"));
// console.log(validatePIN("1234567"));
// console.log(validatePIN("-1234"));
// console.log(validatePIN("1.234"));
// console.log(validatePIN("-1.234"));
// console.log(validatePIN("00000000"));
// console.log(validatePIN("a234"));

// const findShort = (s) =>
//   Math.min(
//     s
//       .split(" ")
//       .map((word) => word.length)
//       .join(",")
//     );

// const findShort = (s) => Math.min(...s.split(" ").map((word) => word.length));
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(
//   findShort(
//     "turns out random test cases are easier than writing out basic ones"
//   )
// );
// console.log(findShort("Let's travel abroad shall we"));

// const feast = (beast, dish) =>
//   beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//     ? true
//     : false;

// console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("chickadee", "chocolate cake"));
// console.log(feast("brown bear", "bear claw"));
// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([5]));

// function getMiddle(s) {
//   while (s.length > 2) {
//     s = s.slice(1, s.length - 1);
//   }
//   return s;
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));

// const setAlarm = (employed, vacation) =>
//   employed === true && vacation === false;

// console.log(setAlarm(true, true)); // -> false
// console.log(setAlarm(false, true)); // -> false
// console.log(setAlarm(false, false)); // -> false
// console.log(setAlarm(true, false)); // -> true

// const setAlarm = (employed, vacation) => employed && !vacation;

function queueTime(customers, n) {
  const cashbox = new Array(n).fill(0);
  for (let j = 0; j < customers.length; j++) {
    cashbox[cashbox.indexOf(Math.min(...cashbox))] += customers[j];
  }
  return Math.max(...cashbox);
}

//console.log(queueTime([5, 3, 4], 1));
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

//console.log(queueTime([10, 2, 3, 3], 2));
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

//console.log(queueTime([2, 3, 10], 2));
// // should return 12

// //console.log(queueTime([2, 3, 10], 3));
// // should return 10

// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }

// const findUniq = (arr) =>
//   [...arr].sort((a, b) => a - b)[0] === [...arr].sort((a, b) => a - b)[0]
//     ? [...arr].sort((a, b) => a - b)[arr.length - 1]
//     : [...arr].sort((a, b) => a - b)[0];

// const findUniq = (arr) => {
//   const newArr = [...arr].sort((a, b) => a - b);
//   return newArr[0] === newArr[1] ? newArr[arr.length - 1] : newArr[0];
// };

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }

// console.log(findUniq([1, 0, 0])); // 1);
// console.log(findUniq([0, 1, 0])); // 1);
// console.log(findUniq([0, 0, 1])); // 1);
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2);
// console.log(findUniq([1, 1, 2, 1, 1])); // 2);
// console.log(findUniq([3, 10, 3, 3, 3])); //10);

// function openOrSenior(data) {
//   const members = [];
//   for (const candidate of data) {
//     candidate[0] >= 55 && candidate[1] > 7
//       ? members.push("Senior")
//       : members.push("Open");
//   }
//   return members;
// }

// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );
// // ["Open", "Senior", "Open", "Senior"]
// // console.log(
// //   openOrSenior([
// //     [3, 12],
// //     [55, 1],
// //     [91, -2],
// //     [53, 23],
// //   ])
// // );
// // // ["Open", "Open", "Open", "Open"]
// // console.log(
// //   openOrSenior([
// //     [59, 12],
// //     [55, -1],
// //     [12, -2],
// //     [12, 12],
// //   ])
// // ); //  ["Senior", "Open", "Open", "Open"]

class SmallestIntegerFinder {
  findSmallestInt(args) {}
}
