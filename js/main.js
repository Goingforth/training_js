// const repeatStr = (n, s) => s.repeat(n);

// console.log(repeatStr(3, "*")); //, "***");
// console.log(repeatStr(5, "#")); //, "#####");
// console.log(repeatStr(2, "ha ")); //, "ha ha ");

// const switchItUp = (number) =>
//   [
//     "Zero",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//   ][number];

// console.log(switchItUp(1)); //,"One"
// console.log(switchItUp(3)); //,"Three"
// console.log(switchItUp(5)); //,"Five"););

// const strCount = (str, letter) =>
//   [...str].reduce((acc, item) => {
//     return item === letter ? acc + 1 : acc;
//   }, 0);

// console.log(strCount("Hello", "o")); //, 1);
// console.log(strCount("Hello", "l")); //, 2);
// console.log(strCount("", "z")); //, 0);

// function strCount(str, letter) {
//   return str.split(letter).length - 1;
// }

const array = [12, 33, 76, 89, 92];
function sumItemArray(array) {
  let total = 0;
  for (const item of array) {
    total += item;
  }
  return total;
}

console.log(sumItemArray(array));
