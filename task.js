let wordLen = prompt('stringi daxil edin: ')
console.log(wordLen.length);

let wordIncludes = prompt('stringi daxil edin: ')
console.log(wordIncludes.includes("e"));

let wordStart = prompt('stringi daxil edin: ')
console.log(wordStart.startsWith("code"));

let wordEnd = prompt('stringi daxil edin: ')
console.log(wordEnd.endsWith("code"));

let wordReplace = prompt('stringi daxil edin: ')
console.log(wordReplace.replaceAll("t","####"));




// task-3

let num1 = 12345;
let num2 = 98765;

let hasil = num1 * num2;
let hasilStr = hasil.toString();
// console.log(hasil);
console.log(hasilStr[6]);