//string
let str = "The Cyborgs";
 str = str.toUpperCase() //it creat new string
console.log(str);
console.log(newStr);
console.log(str[2]);

let sepecialString ='this is string'

console.log(typeof sepecialString)
// for (let i of str){
//     console.log(i);
    
// }


let obj = {
    item:"pen",
    price: 10,
};
let output= `The cost of ${obj.item} is ${obj.price} rupee`; // `Template litera {expression} string`
console.log(output);
console.log("The cost of" ,obj.item , "is", obj.price);
let out= `The cost of ${1+2+3}`; // Template litera (we also add string) string
console.log(out);

// stringss methods = is a block of code
//str.toUpperCase()
//str.tpLowerCase()
//str.trim() remove whitespace
// str.slice(start,end?) return part of string
// str1.concat(str2) join str2 with str\
//str.replace(searchVal,newVal)
//str.charAt(idx)



