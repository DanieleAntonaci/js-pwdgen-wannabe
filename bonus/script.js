let fistName;
let lastName;
let color;
let newPassword = document.getElementById('password')

function creazionePassword() {
    // Richiesta Nome
    fistName = prompt('Inserisci il tuo nome');

    console.log(fistName);

    // Richiesta conognome
    lastName = prompt(`Ciao ${fistName}, inserici il tuo cognome`);

    console.log(lastName);


    // colore preferito
    color = prompt('Inserisci il tuo colore preferito');
    console.log(color);
}

// stapa del testo


// BONUS
creazionePassword()
if (fistName && lastName && color) {
    newPassword.innerHTML = `${fistName}${lastName}${color}21`;
    newPassword.style.backgroundColor = "green"
}
else {
    newPassword.innerHTML = "Riprova";
    newPassword.style.backgroundColor = "red"
}