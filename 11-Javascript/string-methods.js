let str = "      Kishor Kumar Paroi paroi pAroi";
// let newStr = str.replace("Paroi", "Boss");
// console.log(newStr);
// let newStr = str.replace(/paroi/i, "Boss");
// console.log(newStr);

let anotherStr = str.replaceAll(/paroi/gi, "Boss");
console.log(anotherStr);

let x = "kishor kumar paroi       ";
console.log(x.toLocaleLowerCase());
console.log(x.toLowerCase());
console.log(x.toUpperCase());
console.log(x.toLocaleUpperCase());


let newstring = anotherStr.concat(", ", x);
console.log(newstring)
newstring = newstring.trim();
console.log(newstring);

