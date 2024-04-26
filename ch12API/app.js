const URL =" https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);  //fetch the data from API
// console.log(promise);

const getFacts = async()=>{
    console.log("getting data...")
    let response =await fetch(URL)   //wait for the promise to resolve
    console.log(response); //   json formater
   let data= await response.json();
   console.log(data);
}