 let company= ["Bloomberg","Microsoft","Uber" , "Google","IBM" ," Netflix"]

 //1a
 console.log(`deleted element from front   is ${company.shift( )}`) ;
 console.log(company) ;
  // 2Remove Uber & Add Ola
 
company.splice(1,1,'Ola');
console.log( "we replace",company) 

 //3 add end
company.push("amazon");
console.log(company) ;
