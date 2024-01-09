// arrow function penulisan singkat function

// const perpangkatan = (x) => {
//     return x * x;
// }

// perpangkatan(5)

// di atas adalah arrow function expression di tandai dgn => jika dijadikan function expressi biasa maka akan menjadi

// const perpangkatan = function(x) {
//     return x * x;
// };

// perpangkatan(5);
// atau bisa juga 
// const perpangkatan = function(x) {
//     return x * x;
// };
// const hasil = perpangkatan(5)
// hasil()

// materi selanjutnya
// Return Secara Implisit Dari Arrow Function
// jika didalam arrow function terdapat logic yag sederhana atau satu baris maka tidak perlu menggunkan method return dan mengganti kurung kurawal menjadi kurung biasa
// tanda kurung biasa artinya hanya bisa eksekusi satu baris saja
// contoh

const random = () => (
    Math.floor(Math.random() * 1000)
);
 
console.log(random())

const add = (a, b) => a + b
console.log(add(4,4))