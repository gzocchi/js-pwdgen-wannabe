// Chiedi all'utente il suo nome
var nomeUtente = prompt("Ciao, qual'è il tuo nome?")
// Chiedi il suo cognome
var cognomeUtente = prompt("Ora scrivi il tuo cognome!")
// Chiedi il suo colore preferito
var coloreUtente = prompt("ora scrivi il tuo cognome!")

// debug
console.log(nomeUtente);
console.log(cognomeUtente);
console.log(coloreUtente);

// Scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("personal_pwd").innerHTML = nomeUtente + cognomeUtente + coloreUtente + "21"