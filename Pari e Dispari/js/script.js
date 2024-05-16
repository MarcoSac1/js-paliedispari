

// genero un numero randomico
let numeroRandomico = getRandomInt (1 ,5);

function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}