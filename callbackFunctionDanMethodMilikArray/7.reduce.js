// Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce
// reduce melakukan proses sebanyaknya element milik suatu array. nilai baliknnya adalah single value.

// const subtotal = [1500, 20000, 4000, 19000, 32000];

// const total = subtotal.reduce((currentTotal, singleSubtotal) => {
//     return currentTotal + singleSubtotal
// })

// console.log(total)
// mencari total score dgn reduce
const examScore = [80, 85, 70, 90, 93, 77];
// jika dgn perulangan seperti ini
// let total = 0;
// for (let score of examScore){
//     total += score;
// }
//maka reduce seperti ini

const total = examScore.reduce((total, score) => {
    return total + score;
});

console.log(total)

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
// mencari anime dgn rating terbaik
const bestAnime = animes.reduce((bestAnime, currAnime) => {
    console.log(bestAnime, currAnime) //untuk mengetahui kegiatannya
    if(currAnime.rating > bestAnime.rating){
        return currAnime;
    }
    return bestAnime;
})

console.log(bestAnime) //nilai dari rating tertinggi
// 