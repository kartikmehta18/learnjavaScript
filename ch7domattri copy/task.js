
let newBtn = document.createElement("button");
newBtn.innerText="Click Kar";

newBtn.style.backgroundColor="pink";
newBtn.style.borderColor="blue";


document.querySelector("body").prepend(newBtn) ;

let para = document.querySelector("p");
// para.setAttribute("class" ,"newClass" );   // for replacing the class

para.classList.add("newClass")  ;  // for adding new class in the body or  / .remove for rem
