let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

}

choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 