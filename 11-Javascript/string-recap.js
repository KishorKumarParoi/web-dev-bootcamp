// ? slice(start, end)
// ? substring(start, end)
// ? substr(start, length)

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
let part1 = text.substring(15);
let part2 = text.substr(15, 12);
let part3 = text.slice(-4);
let part4 = text.slice(-10, -6);


console.log(part, part1, part2, part3, `${part4}`);
let textArr = text.split("|");


console.log(textArr);