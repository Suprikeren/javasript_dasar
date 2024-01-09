// Map nilai baliknya adalah array baru yang dimodifikasi melauli callback function dari suautu array
// contoh 1
// const expression = ['rofl', 'lol', 'omg', 'ttyl']
// const capsExpression = expression.map(function(exprs){
//     return exprs.toUpperCase();
// })

// expression;
// console.log(capsExpression);
// contoh 2

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const angkaDouble = angka.map(function (kali){
    return kali *2;
})


console.log(angkaDouble)
