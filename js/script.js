// creo una variabile dove faccio inserire al utente una parola 

const parolaUtente = prompt('type a word');
// console.log(userWord);


// let parolaUtente = "antonio"  // Prompt;

function reverseWord(userParola) {    
    return userParola.split('').reverse().join('');
}

let parolaAlContrario = reverseWord('parolaUtente');
console.log(parolaAlContrario);


// SE la parola inserita dall'utente (parolaUtente) e la sua versione al contrario (parolaAlContrario) sono UGUALI,
// ALLORA la parola è palindroma
// ALTRIMENTI no

if(parolaUtente === parolaAlContrario){
    console.log('palindroma');

}else{
    console.log('sono  diverse');
}