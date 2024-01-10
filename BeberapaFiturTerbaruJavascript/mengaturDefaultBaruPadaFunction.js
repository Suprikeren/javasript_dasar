// default value parameter
// nilai yang digunakan saat fungsi dipanggil tapi tidak diberi nilai argument yang diperlukans
// function perkalian(a , b) {
//     b = typeof b !== 'undefined' ? b :1;
//      return a * b;
// }
// // menjadi
// function perkalian(a,b = 1){
//     return a * b;
// }
// nilai b di beri pada parameter
// contoh

// function lemparDadu(sisi){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// console.log(lemparDadu(6)) 

// menjadi
// function lemparDadu(sisi = 6){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// console.log(lemparDadu()) 
// perbedaanya ada pada ketika di eksekusi,, yang kama tanpa di beri nilai pada parameter sehingga pada eksekusi argumentnya harus di eksekusi,,
// sedangkan yang baru parameter telah didefinikan lebih dahulu nilainya,, dan jika lupa memberi nilai pada argument ketika di eksekusi maka nilai pada parameter akan di eksekusi
// masih ingat dgn perbedaan parameter dan argument bukan,, jika lupa buka materi function nomor 2
// harus tau default valuenya juga
function tambah(a = 2, b = 2){
    return a + b;
}

console.log(tambah())






