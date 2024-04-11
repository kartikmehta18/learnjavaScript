let foodItem =["orange" ,"apple", "tomato","garlic"];
//push operation

foodItem.push("mango","litchy");
console.log(foodItem);

let deletVal =foodItem.pop();
console.log(foodItem);
let out =`  deleted value is ${deletVal}`;
console.log(out);

console.log(foodItem.toString()); // .tostring it converted array in to string

// concate to array
let marvelHeros = ["thor","spiderman", "ironman"];
let dcHeros=["superman", "batman"]
let indHeros=["shaktiman", "krish"]
console.log(marvelHeros.concat(dcHeros,indHeros));

//unshfit method  add valuen in front of array

let marvelHeros1 = ["thor","spiderman", "ironman"];
marvelHeros1.unshift("antman"); // used for add valuen in front of array
console.log(marvelHeros1);

//shift method  delete value in front of array shift( )
let marvelHeros2= ["thor","spiderman", "ironman", ];
marvelHeros1.shift( ); // used for delete value from front of array
console.log(marvelHeros1);

// slice (startldx ,endidx)
let marvelHeros3= ["thor","spiderman", "ironman","superman", "batman"];
console.log(marvelHeros3);
console.log(marvelHeros3.slice(2));

// splice (startIdx ,delCount , newElem) for delete add return
let arr= [1,2,3,4, 5,6,7];
// arr.splice(2,2,102)
// add
arr.splice(2,0,101);
// delete

arr.splice(3,1);

//replace
arr.splice(3,1,108)
