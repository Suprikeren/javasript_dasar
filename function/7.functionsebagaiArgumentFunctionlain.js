// 
// Fungsi sebagai argumen adalah konsep dalam pemrograman di mana Anda dapat menggunakan fungsi sebagai parameter untuk fungsi lain.
//contoh 1
// function duaKali(func){
//     func()
//     func()
// }

// function lemparDadu(){
//     const nilai = Math.floor(Math.random() * 6) + 1;
//     console.log(nilai)
// }

// duaKali(lemparDadu)

// contoh 2
// Fungsi yang menerima fungsi sebagai argumen
// function jalankanFungsi(fn, nilai) {
//     return fn(nilai);
// }

// // Fungsi yang akan dijalankan
// function hasilPerpangkatan(nilai) {
//     return nilai * nilai;
// }

// // Memanggil fungsi jalankanFungsi dengan hasilPerpangkatan sebagai argumen
// var hasil = jalankanFungsi(hasilPerpangkatan, 5);

// // Menampilkan hasil ke konsol
// console.log(hasil); // Output: 25
// contoh 3