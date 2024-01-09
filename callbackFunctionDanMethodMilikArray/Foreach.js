// forEach dapat menggunakan callback function yang berarti dapat memanggil sebuah fugsi sebanyak jumlah element yang dimiliki array
// forEach mirip seperti perualngan for
// Menggunakan forEach untuk melakukan iterasi pada setiap elemen array
// foreach bekerja sebanyak array yang dimiliki
// const angka = [1,2,3,4,5,6,7,8,9];

// angka.forEach(function(n) {
//     console.log(n * n)
// })

// atau bisa juga di bawah ini

// function print(element) {
//     console.log(element)
// }

// angka.forEach(print);
// 
// angka.forEach(function (el) {
//     if (el % 2 === 0 ){
//         console.log(el);
//     }
// });

const animes = [
    {
        title: 'Naruto',
        rating: 90,
    },
    {
        title: 'one piece',
        rating: 92,
    },
    {
        title: 'black clover',
        rating: 91,
    },
    {
        title: 'jujutsu kaisen',
        rating: 95,
    },
    {
        title: 'solo leveling',
        rating: 95,
    },
    {
        title: 'aono exorcist',
        rating: 98,
    },
    {
        title: 'mashel',
        rating: 100,
    },
];

animes.forEach(function(anime){
    console.log(`${anime.title} - ${anime.rating}/100`);
});
// animes.forEach(function (anime) {
//     if (anime.rating >= 90 ){
//      console.log(anime)
//     }
//  });
// contoh di atas adalah callback function
