// Malas Bikin Parameter Banyak Bisa Pakai Rest Param
// rest param //males ketik parameter yang panjang banget? pake aja spread operator

// function sumAll(...nums) {
//     let total = 0;
//     for(let n of nums) total += n
//     return total
// }

// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };
// // ingat reduce menghasilkan nilai tunggal
// console.log(sumAll(1,))
// console.log(sumAll(1,2))
// console.log(sumAll(1,2,3))
// console.log(sumAll(1,2,3,4))
// console.log(sumAll(1,2,3,4,5))

// 
// 
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`medali emas diraih: ${gold}`);
//     console.log(`medali silver diraih: ${silver}`);
//     console.log(`medali bronze diraih: ${bronze}`);
//     console.log(`peserta lainnya: ${sisa}`);
// };
// pemenang(...nama);

// materi baru
//4. destructing
// // Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah-
// DESTRUCTING // unboxing versi array dan object. kita mulai dengan array ada dulu ygy

// - array
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];

// const [gold, silver, bronze, ...peserta] = nama;

// -object

// const user = {
//     name: 'John',
//     email: 'jonh@gmail.com'
// };

// // const {name:nama, email} = user; //memngubah variable name menjadi nama dgn destructing
// // console.log(nama);
// // console.log(email)
// const {name:nama, email,phone = '0813333333'} = user; //menambah data baru di object

// materi baru
// Bongkar Properti Object Bisa Dilakukan Di Dalam Function
// destructing unboxingnya juga bisa dipake buat parameter pada function

// contoh
// const user = {
//     name: 'User',
//     email: 'user@main.com',
//     role: 'Admin'
// }

// const userAndRole = ({name, role}) => {
//     return `${name} - ${role}`
// }

// console.log(userAndRole(user))
// jadi tidak perlu menambah user.name,, karena sudah di pecah di dalam arrow function
// contoh 2

const animes = [
    {
        title: 'naruto',
        rating: 90,
        year: 2013,
    },
    {
        title: 'noragami',
        rating: 95,
        year: 2013,
    },
    {
        title: 'parasite',
        rating: 92,
        year: 2010,
    },
    {
        title: 'deat note',
        rating: 96,
        year: 2010,
    },
    {
        title: 'dorororo',
        rating: 93,
        year: 2000,
    },
    {
        title: 'dargonball',
        rating: 80,
        year: 1999,
    },
    {
        title: 'bleach',
        rating: 85,
        year: 1999,
    },
    {
        title: 'onp piece',
        rating: 95,
        year: 1999,
    },
    {
        title: 'solo leveling',
        rating: 99,
        year: 2024,
    },
    {
        title: 'tokyo ghoul',
        rating: 90,
        year: 2010,
    },
    {
        title: 'Attack on titan',
        rating: 90,
        year: 2010,
    },
];

// const anime = animes.map(({title, rating}) => {
//     return ` ${title} - ${rating}`
// });
const anime = animes.map(({title, year,rating }) => {
    return ` ${title} - ${year} - ${rating} `
});

console.log(anime)