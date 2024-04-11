// q1 we want >90
let  marks =[97,64,32,49,99,96,86];

let ninety = marks.filter((val) => {
    return val > 90;
});
console.log(ninety);

// 2 q2
 let n = prompt("enter the number num of array u want ")
let arr=[];
for(i=1; n>=i; i++){
    arr[i-1]= i;
 
}
console.log(`your arr is  ${arr}`);



// sum reduce
const sumArr = arr.reduce((prev , curr) => {
    return prev+ curr ;
});
console.log(`your arr  sum is  ${sumArr}`);

// product reduce fact
const factArr = arr.reduce((prev , curr) => {

    return prev*curr ;
});
console.log(`your arr factorial is  ${factArr}`);