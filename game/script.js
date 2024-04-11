// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const  msg = document.querySelector("#msg")

// const user =document.querySelector("#user");
// const comp =document.querySelector("#comp");
// // comp choice
// const getCompChoice =() => {
//     const options =["rock","paper", "scissors"];
//    const randIDx = Math.floor(Math.random() *3);
//    return options[randIDx];
// }

// // Winning  conditions for the user and computer
// const drawGame = () =>{
//         console.log("its draw");
//         msg.innerText = "its Draw,Play agein";
//         msg.style.backgroundColor="purple";
    
// }
// //8209759948    9414859283



// const showWinner = (userWin,userChoice , compChoice) =>{
//     if (userWin){
//         userScore++
//         user.innerText =  userScore;
//         console.log("you win");
//         msg.innerText = `you win your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor="green";
//     }
//     else {
//         compScore++
//         comp.innerText = compScore;
//         console.log("you lost");
//         msg.innerText = `you lost ${compChoice} beats ${userChoice}`;
//         msg.style.backgroundColor="red";
//     }
    
// };




// const playGame = (userChoice) => {
//     console.log("user choice =", userChoice) // gen comp
//     const compChoice = getCompChoice();
//     console.log("comp choice =",compChoice);

//     if (compChoice=== userChoice){
//         drawGame();
//     }
//     else{
//         let userWin = true;
//         if(userChoice="rock") {
//             //scissors ,paper
//             userWin =compChoice ==="paper" ? false : true;
//         } else if(userChoice ==="paper"){
//             //rock , scissors
//             userWin=compChoice ==="scissors" ? false :true;
//         } else {
//             // rock ,paper
//             userWin = compChoice === "rock"? false :true;
//         }
//         showWinner(userWin,userChoice , compChoice);
//     }
// };
// // user choice
// choices.forEach ((choice)=>{
  
//     choice.addEventListener( "click",()=>{
//         const userChoice = choice.getAttribute("id");

//       playGame(userChoice);
//     });
// });



let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    console.log("you win");
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    console.log("you lose");
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


        