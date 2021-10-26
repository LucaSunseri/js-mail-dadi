/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


// Creo la costante del bottone
const btnCheck = document.getElementById('check');

// Creo la funzione al click del bottone
btnCheck.addEventListener('click',function(){

  // Creo la costante email dell'utente
  const userEmail = document.getElementById("email").value;
  // console.log(userEmail);

  // Array database Email 
  const databaseEmail = ["arianna.arco@gmail.com", "sofia.rossi@libero.it", 
  "amelia.nonloso@yahoo.com", 
  "ilenia1012@libero.it", 
  "isabella.gattini@gmail.com", 
  "matilda.guitar@gmail.com", 
  "fabio.gasolio@libero.it", 
  "luca.castronovo@gmail.com",
  "andrea.guitar@yahoo.it",
  "porto_maso@grs.it",
  "mobilinuovi@asrl.com"];

  // Creo la variabile booleana di verifica dell'email
  let verifiedEmail = false;

  // Creo un ciclo per avere tutte l'email del database
  for (let i = 0; i < databaseEmail.length; i++ ) {
    // console.log(databaseEmail[i]);

    // Se l'email inserita dall'utente è uguale a una dell'email presente nel database la variabile "verifiedEmail" è vera
    if (databaseEmail[i] === userEmail) {
      verifiedEmail = true;
    }
  }

  // console.log("email verificata",verifiedEmail);

   // Creo due percorsi in base alla variabile "verifiedEmail" (se è vera o falsa)
  if (verifiedEmail === true) {
    const succes = document.getElementById("succes");
    succes.className = "alert alert-success ls-display-block"
    const form = document.getElementById("form");
    form.className = "ls-display-none";
  } else {
    const wrong = document.getElementById("wrong");
    wrong.className = "alert alert-danger ls-display-block"
    const form = document.getElementById("form");
    form.className = "ls-display-none";
  }
  
});