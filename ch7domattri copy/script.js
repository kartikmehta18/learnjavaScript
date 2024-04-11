// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("Name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// //style

// let don=document.querySelector("div");
// div.style.backgroundColor="purple";
// div.style.fontFamily="poppins";
// // div.style.fontSize="30px";
// // div.innerText= "hEMLO"

//INSERT ELEMENT

let newBtn = document.createElement("button");
newBtn.innerText ="click me!";

console.log(newBtn);


let div = document.querySelector( "div");
div.after(newBtn);
div.append(newBtn);
div.append(newBtn);
div.append(newBtn);
// ADD NEW ELEMENT IN THE DOM OR BODY
let newHed = document.createElement("h1") ;
newHed.innerHTML = "<i> hi i am kartik</i>";
document.querySelector("body").prepend(newHed);

//DELETE
let para= document.querySelector("p");
para.remove();
