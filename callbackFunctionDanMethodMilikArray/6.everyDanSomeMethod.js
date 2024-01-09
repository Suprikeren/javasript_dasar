// every akan mengembalikan nilai boolean. true pada saat seluruh nilai yag ada pada suatu array memiliki keriteria yang sama. false jika sebaliknya.
// JADI EVERY SEMUANYA HARUS SAMA MAKA TRUE
// const kataKata = ['kita', 'kamu', 'saya']
// const semuaPanjang = kataKata.every(kata => {
//     return kata.length === 4;
// });

// console.log(semuaPanjang); // hasilnya true karena masing" panjang karakter kata kata adalah 4
// console.log(kataKata);
// 
const examScore = [80, 85, 79, 90, 93, 77];
const isGraduate = examScore.every((score) => score >= 75); // ganti nilai menjadi lebih besar atau sama dengan 80
console.log(isGraduate);
// 
// some mirip dgn every, tapi lebih fleksibel. hasilnya akan true jika salah satu isi dari array memiliki kriteria yang sama. akan false jika sama sekali tidak ada yang sesuai kriteria.
// SOME JIKA SALAH SATU SAMA MAKA TRUE
// const kataKata = ['kita', 'kamu', 'saya' ,'kau']
// const semuaPanjang = kataKata.some(kata => {
//     return kata.length === 3;
// });

// console.log(semuaPanjang); 

// 
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

const isAnimeListnew = animes.some((anime) => anime.year > 2010);
console.log(isAnimeListnew)