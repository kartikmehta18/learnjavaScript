// Event handeling or mouse click or hover on button and box
// even can be assign or done by two types 1) inline event handel 2) handeling event in "JS"


// let btn1= document.querySelector("#btn1");

// btn1.onclick = ()=>{
//     console.log("ho gya  bhai click "); alert(` bs bhai kitna daba e ga `);

// }

// let do1 = document.querySelector(".do1");
// do1.onmouseover =(eve) => {
//     console.log(`kar li gand me ungli`);
//     console.log(eve);
//     console.log(eve.target);
//     console.log(eve.type);
//     console.log(eve.clientX, eve.clientY);

// };

// // EVENT  add LISTNER one of the best way to handel the event 

// btn1.addEventListener("click", (eve) =>{ // multipe event can be done
//     console.log("ho gya  bhai click1 ");
//     console.log(eve.type)
// })
// btn1.addEventListener("click", (eve) =>{ // multipe event can be done
//     console.log("ho gya  bhai click2 ");
   
// })
// btn1.addEventListener("click", (eve) =>{ // multipe event can be done
//     console.log("ho gya  bhai click3 ");
    
// })
// const handeler4 =() =>{ // multipe event can be done
//     console.log("ho gya  bhai click4 ");
    
// };


// do1.addEventListener("onmouseover", ()=>{
//     console.log(`kar li gand me ungli bandar`);
// })

// // REMOVE LISTNER
// btn1.removeEventListener("click", handeler4);




// let modeBtn = document.querySelector("#mode");
// let currMode ="light" ;  

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode ="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     } else {
//         currMode ="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//   console.log(currMode);
// });

//or

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currMode);
});
// let bdy = document.querySelector("body");
//     modeBtn.onmouseover =(eve) => {
//         if (currMode === "light") {
//             currMode = "dark";
//             bdy.classList.remove("light");
//             bdy.classList.add("dark");
//         } else {
//             currMode = "light";
//             bdy.classList.remove("dark");
//             bdy.classList.add("light");
//         }
//         console.log(currMode);
//            };
    
