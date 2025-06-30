//Map is used for creating new array
let num = [67,52, 39];
num.map ((val) =>{
    console.log(val);
});

let newArr = num.map((val) =>{
    return val*val;
})
console.log(newArr)

 // Filtr 

let arr =[1,2,3,4,5,6,7];
let evenArr = arr.filter((val) => {
     return val% 2=== 0;
    
});
console.log(evenArr);

/// Reduce method  it reduce the array  multiple value to single value 

let arr1 = [5,6,2,1,3];
const output =arr1.reduce((prev,curr)=>{
return prev+curr;
})
console.log(output);


let arr2 =[5,6,2,1, 101,3];
const out1 =arr2.reduce((prev, curr)=> {
return  prev >curr ? prev:curr;
});
console.log(out1);                                                                                                                                  