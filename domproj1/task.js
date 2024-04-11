let h2 = document.querySelector("h2");
console.dir(h2.innerText);   
h2.innerText = h2.innerText + " from apna col1ege"; 
// console.log(h2.innerHTML =<I>" Hello javaScript from apna colege"); 



//2 q

let divs = document.querySelectorAll(".box");
console.log(divs);
let idx =1
for(div of divs){   
    // console.log(div.innerText)
    div.innerText =`new  value ${idx}`;
    idx++;
}

// divs[0].innerText = "new wal is the of 1";
// divs[1].innerText = "new wal is the of 2";
// divs[2].innerText = "new wal is the of 3";

