

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

const result = pariODispari(sum);

if(result === oddOrEven){
    console.log('L utente vince');
    } else {
        console.log('Il computer vince');
}


//  creo una funzione che genera un numero tra minimo e massimo 
function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

function pariODispari(number) {
    if(number % 2 === 0){
        return 'pari';
    } else{
        return 'dispari';
    }
}

// creo una funzione che  controlla se il numero fornito e dispari
function isOdd(Number) {
    number = Number.parseInt(number, 10);
    return number % 2 === 1;
}

// creo una funzione che  controlla se il numero fornito e pari
function isEven(Number) {
    number = Number.parseInt(number, 10);
    return number % 2 === 0;
}
