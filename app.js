let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getCompChoice(){
  const choices = ['r', 'p', 's'];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}

function convert(letter){
  if(letter === "r") return "Rock";
  else if(letter === "p") return "Paper";
  else return "Scissors";
}

function win(userChoice,compChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smalluser = "user".fontsize(4).sub();
  const smallcomp = "comp".fontsize(4).sub();
  result_p.innerHTML =`${convert(userChoice)}${smalluser} beats ${convert(compChoice)}${smallcomp}. You WIN! :)`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'),500);
}

function lose(userChoice,compChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smalluser = "user".fontsize(4).sub();
  const smallcomp = "comp".fontsize(4).sub();
  result_p.innerHTML = `${convert(userChoice)}${smalluser} loses to ${convert(compChoice)}${smallcomp}. You LOSE! :(`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'),500);
}

function draw(userChoice,compChoice){
  const smalluser = "user".fontsize(4).sub();
  const smallcomp = "comp".fontsize(4).sub();
  result_p.innerHTML = `${convert(userChoice)}${smalluser} equals ${convert(compChoice)}${smallcomp}. It's a DRAW!`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() =>  document.getElementById(userChoice).classList.remove('gray-glow'),500);
}


function game(userChoice){
  const compChoice = getCompChoice();

  switch (userChoice + compChoice){
    case "rs":
    case "pr":
    case "sp" :
        win(userChoice,compChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,compChoice);
      break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice,compChoice);
        break;
  }
}

function main(){
  rock_div.addEventListener('click', () =>  game("r"));
  paper_div.addEventListener('click', () =>  game("p"));
  scissors_div.addEventListener('click',() => game("s"));

}

main();
