function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creo un array para llevar la cuenta de los valores
let valueAppearances = [];

// inicializo el array con la cuenta de los valores a cero
for (let index = 0; index < 10; index++) {
    valueAppearances.push(0);
}

// saco aleatorios un montón de veces
for (let i = 0; i <= 10000; i++) {
    // obtengo el aleatorio entre 2 y 9
    let randomIndex = random(2, 9);
    // incremento las apariciones de este valor
    valueAppearances[randomIndex]++;
}
// muestro el array resultante, que debería tener más o menos las mismas apariciones
// recuerda, para los índices entre 2 y 9
console.table(valueAppearances);