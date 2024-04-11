function countVowrls(str) {
    let count =0;
 for(const char of str){
    // console.log(char);
    if(char==="a" || char ==="e" || char==="i" || char ==="o" || char ==="u"){
        count++;
        console.log(char);
       
    }
 }
 return count;
}

// using arrow function

const countVouwls= (str)=>{
    let count =0;
     for(const char of str){
        // console.log(char);
        if(char==="a" || char ==="e" || char==="i" || char ==="o" || char ==="u"){
            count++;
            console.log(char);
           
        }
     }
     return count;
}
