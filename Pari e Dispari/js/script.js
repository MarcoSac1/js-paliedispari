

// - creo una variabile dove faccio scegliere al utente pari o dispari 
let oddOrEven = prompt('pari o dispari');

// con un ciclo dove controllo che l'utene inseririsca correttamente 'pari o dispari'
while(oddOrEven !== 'pari' && oddOrEven !== 'dispari'){
    let oddOrEven = prompt('pari o dispari');
}

// - faccio inserire un numero da 1 a 5




//  creo una funzione che genera un numero tra minimo e massimo 
function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}






// - creo una function che genera un numero randomico da 1 a 5
// - creo una funzione che controlla se il numero ricevuto e pari o dispari