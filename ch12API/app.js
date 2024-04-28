const URL =" https://cat-fact.herokuapp.com/facts";
const factPara = document.getElementById("fact");
const btn =document.querySelector("#b");


const getFacts = async()=>{
    console.log("getting data...")
    let response =await fetch(URL)   //wait for the promise to resolve
    console.log(response); //   json formater
   let data= await response.json();
   factPara.innerText = data[0].text;
   
   
}

function getFacts1 (){
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText = data[0].text;
    })
}
btn.addEventListener("click",getFacts);
// let promise = fetch(URL);  //fetch the data from API
// console.log(promise);
