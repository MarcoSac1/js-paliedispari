

// - creo una variabile dove faccio scegliere al utente pari o dispari 
let oddOrEven = prompt('pari o dispari').trim().toLocaleLowerCase();

// con un ciclo dove controllo che l'utene inseririsca correttamente 'pari o dispari'
while(oddOrEven !== 'pari' && oddOrEven !== 'dispari'){
    oddOrEven = prompt('pari o dispari').trim().toLocaleLowerCase();
}

// - chiedo al utente di inserire un numero e stampo il risultato in console
let userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5'), 10);
while(Number.isNaN(userNumber)|| userNumber < 1 || userNumber > 5){
    userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5'), 10);
}
console.log(`L'utente ha scelto ${oddOrEven}, e il numero ${userNumber}`);


const aINumber = getRandomInt(1, 5);
const sum = userNumber + aINumber;
console.log(`Il computer ha generato ${aINumber}, e la somma dei due numeri e' ${sum}`);

//  creo una funzione che genera un numero tra minimo e massimo 
function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

// creo una funzione che  controlla se il numero fornito e dispari
function isOdd(Number) {
    return number % 2 === 1;
    
}

// creo una funzione che  controlla se il numero fornito e pari
function isEven(Number) {
    return number % 2 === 0;
    
}




// - creo una function che genera un numero randomico da 1 a 5
// - creo una funzione che controlla se il numero ricevuto e pari o dispari