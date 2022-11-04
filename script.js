// Richiesta Nome
let fistName = prompt('Inserisci il tuo nome');

console.log(fistName);

// Richiesta conognome
let lastName = prompt(`Ciao ${fistName}, inserici il tuo cognome`);

console.log(lastName);


// colore preferito
let color = prompt('Inserisci il tuo colore preferito');
console.log(color);

// stapa del testo
document.getElementById('password').innerHTML = `${fistName}${lastName}${color}21`