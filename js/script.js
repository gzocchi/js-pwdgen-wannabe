// Chiedi all'utente il suo nome
var nomeUtente = prompt("Ciao, qual'è il tuo nome?")
// Chiedi il suo cognome
var cognomeUtente = prompt("Ora scrivimi il tuo cognome!")
// Chiedi il suo colore preferito
var coloreUtente = prompt("Scrivi il tuo colore preferito.")

// debug
console.log("l'utente ha scritto = " + " " + nomeUtente + " " + cognomeUtente + " " + coloreUtente);


var nome = nomeUtente.toLowerCase();
var cognome = cognomeUtente.toLowerCase();
var colore = coloreUtente.toLowerCase();
var numeroCasuale = Math.floor(Math.random() * 100) + 1;

// debug
console.log("Testo modificato: da " + nomeUtente + " a " + nome);
console.log("Testo modificato: da " + cognomeUtente + " a " + cognome);
console.log("Testo modificato: da " + coloreUtente + " a " + colore);

// Scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("personal_pwd").innerHTML = nome + cognome + colore + numeroCasuale