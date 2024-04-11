// condition statment

let age= 14

if (age>18)
{
    console.log("you can vote");

}
else{
    console.log("not eligible")
}



let mode ="dark";

if(mode==="dark"){
    color="black";

}

if (mode==="light"){
    color="white"
}
console.log(color);

//odd even cocept
let num= 9;

if (num%2===0){
    console.log(num, "even");
}else{
    console.log(num, "odd");
}

// else if

let age1 =29;
if(age1<18)
{console.log("junior");}
else if(age1>60){
    console.log("senior");
}
else{
    console.log("middle");
}

//ternary

let age2 =25;
let result = age2 >= 18 ? "adult" : "not adult"
console.log(result);
// or  
age2 >= 18 ? console.log ("adult") :console.log("not adult"); // not prefer

