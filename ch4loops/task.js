// Q 1

for  (let num= 0;num<=100;num++)
{   //odd no
    if (num %2!==0){
        console.log("num",num);
    }
 
}

// Q 2
let gameNum=25;
let userNum= prompt("Guess the number")  ;
while (userNum !=gameNum){
userNum =prompt("you enter worng num")
}
 console.log("You enter right num",gameNum);
