// mengenal perulangan while
// let num = 0;

// while (num <= 10 ){
//     console.log(num);
//     num++;
// }
// const PASSWORD = 'Pass123';

// let guess = prompt('masukkan sandi');
// while (guess !== PASSWORD) {
//     guess = prompt('sandi salah')
// }

// alert('selamat sandi benar')

// break untuk menghentikan perulangan
// let input = prompt("Hei, say something!");

// while (true) {
//     if (input.toLowerCase() === 'stop') break;
//     input = prompt("Hei, say something!");
// }

// alert('ok');
let input = prompt('Hei, say something!');
while (true) {
    if(input.toLowerCase() === 'stop') break;
    input = prompt(input);
}
alert('ok')

