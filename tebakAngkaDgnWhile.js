let maximum = parseInt(prompt('Masukkan nilai maksimum!'));

while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
targetNum != maximum;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    attemps++
    if (guess > targetNum) {
        guess = parseInt(prompt('Terlalu tinggi! tebak lagi:'));
    } else {
        guess = parseInt(prompt('Terlalu rendah! tebak lagi:'));
    }
}

alert(`Selamat tebakan anda benar, pada percobaan ke ${attemps}`);