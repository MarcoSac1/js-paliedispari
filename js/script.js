// creo una variabile dove faccio inserire al utente una parola 

const userWord = prompt('type a word');
// console.log(userWord);




// creo una 'function' per verificare se la parola e dispari o pari
function palindroma() {
    if(userWord % 2 === 0) {
        console.log(pari);
    }else if(userWord % 2 === 1) {
        console.log(dispari);
    }
    
    return palindroma;
}



// genero un numero randomico
let numeroRandomico = getRandomInt (1 ,5);

function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber);
    return randomNumber;
}