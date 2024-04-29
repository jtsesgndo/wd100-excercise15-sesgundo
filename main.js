let robotChoices = ['Rock', 'Paper', 'Scissors'];



const playGame = (humanChoice) => {
    let human = humanChoice;
    // let robot = Math.round(Math.random() *2);
    // creating random numbers for robot
    let robot = robotChoices[Math.round(Math.random() *2)];
    // Implementing a choice for the robot

    alert(`The choice of the robot is : ${robot}`);
    // alert("The choice of the robot is : " + robot);-----
    alert(`The choice of the human is : ${human}`);
    if(human == "Rock"){
        if(robot == "Rock"){
            // alert("Its a tie!");
            document.querySelector("#flash-text").innerHTML ="Rematch!";
        }else if(robot =="Paper"){
            // alert("Robot wins!");
            document.querySelector("#flash-text").innerHTML ="You lose!";
            scoringFunction("Robot");
        }else if(robot == "Scissors"){
            // alert("Human wins");
            document.querySelector("#flash-text").innerHTML ="You Win!";
            scoringFunction("Human");
        }else{
            // alert("Invalid choice for Robot");
            document.querySelector("#flash-text").innerHTML ="Try Again!";
        }
    };
    if(human == "Paper"){
        if(robot == "Paper"){
            // alert("Its a tie!");
            document.querySelector("#flash-text").innerHTML ="Rematch!";
        }else if(robot =="Scissors"){
            // alert("Robot wins!");
            document.querySelector("#flash-text").innerHTML ="You lose!!";
            scoringFunction("Robot");
        }else if(robot == "Rock"){
            // alert("Human wins!");
            document.querySelector("#flash-text").innerHTML ="You Win!";
            scoringFunction("Human");
        }else{
            // alert("Invalid choice for Robot");
            document.querySelector("#flash-text").innerHTML ="Try Again!";
        }
    };
    if(human == "Scissors"){
        if(robot == "Scissors"){
            // alert("Its a tie!");
            document.querySelector("#flash-text").innerHTML ="Rematch!";
        }else if(robot =="Rock"){
            // alert("Robot wins!");
            document.querySelector("#flash-text").innerHTML ="You lose!!";
            scoringFunction("Robot");
            // scoring function
        }else if(robot == "Paper"){
            // alert("Human wins");
            document.querySelector("#flash-text").innerHTML ="You Win!";
            scoringFunction("Human");
            // scoring function
        }else{
            document.querySelector("#flash-text").innerHTML ="Try Again!";
        }
    };
}

const scoringFunction = (winner) => {
    let humanScore = document.querySelector("#human-score").innerHTML;
    let robotScore = document.querySelector("#robot-score").innerHTML;
    // alert(`Human Score ${humanScore} and Robot Score ${robotScore}`);
    // alert(winner);
    if(winner == "Robot"){
        robotScore++;
        document.querySelector("#robot-score").innerHTML = robotScore;
    }else if(winner == "Human"){
        humanScore++;
        document.querySelector("#human-score").innerHTML = humanScore;
    };
}