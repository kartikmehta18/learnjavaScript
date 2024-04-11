/*let num= prompt("enter the number:"); // for input

if (num % 5 === 0){
    console.log(num, "is multiple of 5");
}
else {
    console.log(num,"is not a multiple of 5");
}*/




// Task 2
let score = prompt("Enter the marks {0- 100}");
let grade;
if(score >90&& score<=100)
{
    grade="A";
}
else if (score>=70 && score <=89)
{
    grade ="B";
}
else if (score >=60 && score < 69)
{
    grade="C";
}
else if (score >=50 && score < 59)
{
    grade="D";
}
else if (score >=0 && score < 49)
{
    grade="F";
}

console.log("Acc to ypur marks your grade is :",grade);
/*Task 3
let x =prompt("Enter value for x");
let y =prompt("Enter value for y");
let z =x+y;
alert("The sum of "+x+" and "+y+" is "+z);*/
