/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


const userEmail = "porto_maso@grs.it"; //poi sostituire con n prompt

const databaseEmail = ["arianna.arco@gmail.com", "sofia.rossi@libero.it", 
"amelia.nonloso@yahoo.com", 
"ilenia1012@libero.it", 
"isabella.gattini@gmail.com", 
"matilda.guitar@gmail.com", 
"fabio.gasolio@libero.it", 
"luca.castronovo@gmail.com",
"andrea.guitar@yahoo.it",
"porto_maso@grs.it",
"mobilinuovi@asrl.com"]

let verifiedEmail = false;


for (let i = 0; i < databaseEmail.length; i++ ) {
  console.log(databaseEmail[i]);

  if (databaseEmail[i] === userEmail) {
    verifiedEmail = true;
  }
}

if (verifiedEmail === true) {
  console.log ("puoi accedere");
}