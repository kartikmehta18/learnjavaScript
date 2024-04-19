//promises  is a object two handlers which is resolve and reject
//  let promise= new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     resolve("success")
//  });



//  function getData(dataId ,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//        console.log("data",dataId);
//        resolve("success");
//          if (getNextData){
//              getNextData();
//          }
//         },5000) ;
//     });
//   }

// const getPromise =()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("i am a proise");
//         resolve("succes");// reject("succes");
//     });
// };

// let promise = getPromise();
// setTimeout(()=>{promise.then(()=>{
//     console.log("promise fuldilled");
// });
// },2000);

// promise.catch(()=>{
//     console.log("error");
// });

// promise chain

function asyncFun(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(" data 1");
        resolve("succes");
    },4000);
    });

}
function asyncFun1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(" data 2");
        resolve("succes");
    },4000);
    });

}
console.log("fetching data 1.....");
let p1 = asyncFun();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2....");
    let p2=asyncFun1() ;
    p2.then((res)=>{
        console.log(res);
    })
})
//or
// console.log("fetching data 1.....");
//  asyncFun().then((res)=>{
//     console.log(res);
//     console.log("fetching data 2....");
//     asyncFun1().then((res)=>{
//         console.log(res);
//     })
// })
 // get fun by chaining
 
 function getData(dataId ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       console.log("data",dataId);
       resolve("success");
        },3000) ;
    });
  }

  getData(1).then((res1)=>{
    console.log(res1);
    getData(2).then((res2)=> {
      console.log(res2);
    })
  });

  //or it is actually promise chain!
  
  getData(1).then((res1)=>{
    console.log(res1);
   return  getData(2);
  })
  .then((res2)=>{
   return getData(4);});