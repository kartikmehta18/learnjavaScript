 let arr1 =[1,2,3,4,5]

 arr1.forEach(function printVal(val){
    
        val=val*val;
        console.log(val);

 });

 let calcSqua = (val) =>{
    
    console.log(val*val);
 };
 arr1.forEach(calcSqua); // it pass function also

 // using arrow
//  arr1.forEach((val) =>{
    
//     console.log(val*val);
//  });


 