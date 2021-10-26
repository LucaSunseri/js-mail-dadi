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

  // Inizializzo le costanti dei dadi per il PC
  const numberPc = Math.floor(Math.random() * 6) + 1;
  // console.log("pc",numberPc);

  // Assegno una faccia del dado per ogni singolo numero
  const dicePc = document.getElementById('dice-pc');
  if (numberPc === 1) {
    dicePc.className = "ls-dice dice-1";
  } else if (numberPc === 2) {
    dicePc.className = "ls-dice dice-2";
  } else if (numberPc === 3) {
    dicePc.className = "ls-dice dice-3";
  } else if (numberPc === 4) {
    dicePc.className = "ls-dice dice-4";
  } else if (numberPc === 5) {
    dicePc.className = "ls-dice dice-5";
  } else if (numberPc === 6) {
    dicePc.className = "ls-dice dice-6";
  }

  // Inizializzo le costanti dei dadi per l'Utente
  const numberUser = Math.floor(Math.random() * 6) + 1;
  // console.log("utente",numberUser);

  // Assegno una faccia del dado per ogni singolo numero
  const diceUser = document.getElementById('dice-user');
  if (numberUser === 1) {
    diceUser.className = "ls-dice dice-1";
  } else if (numberUser === 2) {
    diceUser.className = "ls-dice dice-2";
  } else if (numberUser === 3) {
    diceUser.className = "ls-dice dice-3";
  } else if (numberUser === 4) {
    diceUser.className = "ls-dice dice-4";
  } else if (numberUser === 5) {
    diceUser.className = "ls-dice dice-5";
  } else if (numberUser === 6) {
    diceUser.className = "ls-dice dice-6";
  } 
  
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

