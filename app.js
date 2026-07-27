let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourscore = document.querySelector("#user-score");
const computerscore = document.querySelector("#comp-score");

const Gamedraw = () =>{
    console.log("game was draw");
    msg.innerText = "game was draw , play again!"
    msg.style.backgroundColor = "orange";
}

const showWinner = (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        yourscore.innerText = (userScore);
        console.log("user won"); 
         msg.innerText = `you won ! your ${userChoice} beats ${compChoice} ` ;
         msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        computerscore.innerText= (compScore);
        console.log("computer won");
         msg.innerText = `you lose !  ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    let options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice === compChoice){
        Gamedraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

}



choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 