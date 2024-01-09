// Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup
// saat mendeklarasikan variable di daam function maka variable tersebut tidak akan berpengaruh pada variabe yang ada diluar meskipun dgn nama variable yang sama
// contoh

// let linux = 'RedHat'

// function easyLinux(){
//     let linux = 'Debian';
//    linux; //Debian
// }

// linux; //RedHat
// dimana di atas variable linux dgn isian Redhat  ada diluar function maka ketika dia di pannggil di luar function akan mengahsilkan redHat dan begitu sebaliknya jika didalam functon di panggil maka hasilnya debian

// let programming = 'Javascript';

// function typeSafe() {
//     let programming = 'TypeScript'
//     console.log(programming);
// }
// typeSafe(); // untuk memanggil fungsi typesafe

// console.log(programming);

// artinya variable yang ada di dalam function dgn yang di luar function itu ruang lingkupnya berbeda
//
// Blocked Scope Variabel

// let tinggi = 8;

// if(tinggi > 5) {
//     let lebar = 10;
//     console.log(lebar);
// }
// console.log(tinggi)
// coba panggil variable lebar di luar if hasilnya tetap tidak error karane variabel lebar berada dalam scope if,berbeda dengan tinggi dia berada di luar yang artinya dia variable global
// contoh kedua
// for (let i = 0; i < 10; i++){
//     const indexNumber = i;
//     console.log(indexNumber) 
// }

// console.log(indexNumber)
// 
//Lexical Scope
// Lexical scope mengacu pada cara variabel diikat (binding) dalam lingkup fungsi berdasarkan tempat di mana variabel tersebut dideklarasikan dalam kode sumber, dan bukan pada waktu di mana fungsi dijalankan.
// contoh
// 1.Lingkup Fungsi (Function Scope): Variabel yang dideklarasikan di dalam suatu fungsi hanya dapat diakses di dalam fungsi tersebut, kecuali jika variabel tersebut dideklarasikan di luar fungsi (di tingkat file atau skrip).
// function contohFungsi() {
//     const x = 10; // variabel x hanya dapat diakses di dalam fungsi ini
//     console.log(x);
// }

// yang mulai nomor 2 adalah lexical scope
// contohFungsi();
// console.log(x); // Error, x tidak dapat diakses di luar fungsi
// 2. Lingkup Bersarang (Nested Scope): Ketika ada fungsi bersarang di dalam fungsi lain, fungsi yang lebih dalam memiliki akses ke variabel dari fungsi yang lebih luar, tetapi sebaliknya tidak berlaku.
// function fungsiLuar() {
//     const a = 5;

//     function fungsiDalam() {
//         const b = 10;
//         console.log(a + b); // fungsi dalam dapat mengakses variabel dari fungsi luar
//     }

//     fungsiDalam();
//     // console.log(b); // Error, variabel b tidak dapat diakses di luar fungsi dalam
// }

// fungsiLuar();
// contoh 3
function lamarKerja(){
    const jabatan = 'Programmer'

    function orangDalam(){
        let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
        console.log(kenalan);
    }
    orangDalam();
}
lamarKerja()