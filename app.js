let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const getCompChoice = () =>{
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame = () => {
  //  console.log("Game was draw.");
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor = "skyblue";
};
const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("You Win!");
        msg.innerText =`You Win!  your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
      //  console.log("You Lose");
         msg.innerText =`You Lost! ${compChoice} beats  your ${userChoice}`; 
         msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
   // console.log("user choice is = ",userChoice);
    const compChoice = getCompChoice();
    //console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice)=>{

   // console.log(choice);
    choice.addEventListener("click",() => {
       // console.log("choice was clicked");
       const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });


});