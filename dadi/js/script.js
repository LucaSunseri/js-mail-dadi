/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const nameUser = document.getElementById('user').innerHTML = "Luca"; //inserire prompt

const startGame = document.getElementById("start");
// console.log(startGame);

startGame.addEventListener("click",function(){ 

  let numberPc = Math.floor(Math.random() * 6) + 1;
    // console.log(numberPc);
  const dicePc = document.getElementById('dice-pc').innerHTML = numberPc;

  let numberUser = Math.floor(Math.random() * 6) + 1;
  const diceUser = document.getElementById('dice-user').innerHTML = numberUser;






});

