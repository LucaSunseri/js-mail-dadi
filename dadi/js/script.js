/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Inizializzo le costante nome giocatore
const nameUser = document.getElementById('user').innerHTML = prompt("Come ti chiami?"); 

// Inizializzo le costante bottone
const startGame = document.getElementById("start");
// console.log(startGame);

// Funzione che da il via al gioco al click del bottone
startGame.addEventListener("click",function(){ 

  // Inizializzo le costanti dei dadi per il pc e l'utente
  const numberPc = Math.floor(Math.random() * 6) + 1;
    // console.log(numberPc);
  const dicePc = document.getElementById('dice-pc').innerHTML = numberPc;

  const numberUser = Math.floor(Math.random() * 6) + 1;
  const diceUser = document.getElementById('dice-user').innerHTML = numberUser;
  
  // Inizializzo le costanti per il risultato
  const win = document.getElementById("win");
  const same = document.getElementById("same");
  const lose = document.getElementById("lose");

  // Aggiungo le condizione per il risultato finale
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

