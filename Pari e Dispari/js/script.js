

// // genero un numero randomico
// let numeroRandomico = getRandomInt (1 ,5);



//  creo una funzione che genera un numero tra minimo e massimo 
function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}