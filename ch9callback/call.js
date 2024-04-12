function sum (a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);
//or

calculator(1,2,(a,b)=>{
    console.log(a+b);
});

// Callback hell [if nested callback] ={Fore qure this we use promise statement}
 let age =19;
 if(age>=18){
    if(age>60){
        console.log("senior");
    } else{
        console.log("middel");
    } 
 }else{
    console.log("child")
 }


 //

//  function getData(dataId){
//     console.log("data",dataId);
//  }

 function getData(dataId ,getNextData){
   setTimeout(()=>{
    console.log("data",dataId);
    if (getNextData){
        getNextData();
    }
   },2000) 
 }
// difficult to understand pyaramid of doom =>{promises}
 getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
 });

