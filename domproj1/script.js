
console.dir(window.document); // for pinting / access the html code by js
let heading =document.getElementById("heading") ; //selecting id
console.dir(heading);
 let hi=document.getElementsByClassName("hi"); // selection selecting
console.dir(hi);
// document.getElementsByTagName("p"); 

// Query selector *FOR ID WE USE # AND FOR CLASS WE USE .*
let elements = document.querySelector("p"); // 1st element
console.dir(elements);
let allEl = document.querySelectorAll ("p"); // for seeing all element
console.dir(allEl);

let elements1 = document.querySelector(".hi"); // 1st element
console.dir(elements1);




// properties   querySelector retyrb nodw list

// 
let eleFe = document.querySelector("p"); // 1st element
console.dir(eleFe);

console.dir(eleFe.tagName); // return ele tag
console.dir(eleFe.innerText); // return ele l
 // return ele 


let div = document.querySelector("div")
console.log(div.innerText) // fir acces text
console.log(div.innerHTML); // for access htmltag

let heading = document.querySelector("h1")
// .textContent is used to seeing hidden elements
