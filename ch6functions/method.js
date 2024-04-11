// arr.forEach loop

let arr=  [1,2,3,4,5]
arr.forEach(function printVal(val) { //value at each idx
        console.log(val);
});
 
// arrow fun  arr.forEach loop is also used for pint value , index , array
let arr1=  ["jaipur" , "delhi", "mumbai" , "pune"]
arr.forEach((val,idx ,arr1) =>{
    console.log(val.toUpperCase() , idx,arr1);
});
// it is only use for arr  ont foe string

// forEach loop is also called as a "HIGHER ORDER FUNCTION / METHOD => FXN USE AS A PARAMETER / FXN RETURN VAL"



