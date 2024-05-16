// creo una variabile dove faccio inserire al utente una parola 

const userWord = prompt('type a word');

console.log(userWord);
// creo una 'function' per verificare se la parola e dispari o pari
function palindroma(pari , dispari) {
    
    if( userWord % 2 === 0 ){
        console.log('pari');
    }else{
        console.log('dispari');
    }
}