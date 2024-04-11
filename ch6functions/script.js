/// basic

function myFun(){
    console.log("hi i am kartik \nfullstack developer ");
}
myFun(); /// call invoke
function myFun1(msg){// parameter
    console.log(msg);
}
myFun1("i love js"); //argument 

// start aa code where we add two num

function sum(a,b){
    console.log(a+b);
}
sum(6,2);
function sum1(a,b){
    // a,b are local variable they are alive inside the fun
    j=a+b;
    return j;
}
 let val = sum1(6,1);
 console.log(val);

 // arrow function Moderan js value ke ander function store kar ne ke liye we use =>    .., we use in small work we use arrow function
// its work on withought input ... const printHello =() =>{console.log("hello")}
 const arrowsum =(a,b)=> {
    console.log(a+b);
 };

 const arrowMul =(a,b) =>{ //   arrowMul    value ke ander function store he it is a normal function in whic we add 
    return a*b;
 };


 const printHello =() =>{console.log("hello");};