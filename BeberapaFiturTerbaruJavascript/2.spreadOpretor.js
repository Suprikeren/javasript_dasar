// Mengubah Array Atau Object Menjadi Deret Value Argument Function

// spread operator pada function mengubah suatu array atau object menjadi deret parameter untuk function
// spread operator(...) ditandai 3 titik di awal
// const angka = [1, 2, 3, 4, 5,];
// // Ini akan mengembalikan NaN karena Math.max tidak dapat mengolah array langsung.
// console.log(Math.max(angka)); // NaN
// // Menggunakan spread operator (...) untuk mengubah array menjadi argumen terpisah.
// console.log(Math.max(...angka)); // 5

// materi baru
// Menggabungkan Nilai Array Dengan Array Lagi
// merge array dgn spread operator //menggabungkan array satu dengan lainnya dengan spread operator
// const angka = [1, 2, 3, 4]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delia'];

// const campuran = [...angka, ...nama]

// console.log(campuran)//variable awal yang di definisi itulah yang muncul

// materi baru
// Menggabungkan Property Object Dengan Object Lainnya
// merge object dgn spread operator// harusnya udah ketebak kaya sebelumnya

const user = {
    name: 'User',
    email: 'user@gmail.com'
}

const userDb = 
{
    ...user, role: 'Admin', id:123
};

console.log(userDb)