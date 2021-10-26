/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const nameUser = document.getElementById('user').innerHTML = "Luca"; //inserire prompt

const startGame = document.getElementById("start");
// console.log(startGame);

startGame.addEventListener("click",function(){ 

  const numberPc = Math.floor(Math.random() * 6) + 1;
    // console.log(numberPc);
  const dicePc = document.getElementById('dice-pc').innerHTML = numberPc;

  const numberUser = Math.floor(Math.random() * 6) + 1;
  const diceUser = document.getElementById('dice-user').innerHTML = numberUser;

  let win = document.getElementById("win");
  let same = document.getElementById("same");
  let lose = document.getElementById("lose");

  if (numberPc < numberUser) {
    lose.classList.add("ls-hide");
    same.classList.add("ls-hide");
    win.classList.add("ls-show");
    win.classList.remove("ls-hide");
  } else if (numberPc === numberUser) {
    win.classList.add("ls-hide");
    lose.classList.add("ls-hide");
    same.classList.add("ls-show");
    same.classList.remove("ls-hide");
   } else {
    win.classList.add("ls-hide");
    same.classList.add("ls-hide");
    lose.classList.add("ls-show");
    lose.classList.remove("ls-hide");
  }

});

