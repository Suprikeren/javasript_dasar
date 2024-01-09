// Memiilh Data Tertentu Di Dalam Array Dengan Filter Method
// filter function yang akan mengembalikan nilai array lagi yang sudah dimanipulasi sesuai denagn kriteria yang ditetapkan

const angka = [1,2,3,4,5,6,7,8,9]

const ganjil = angka.filter(n => {
    return n %  2 === 1;
});
// untuk memanggil metode filter tidak menggunakan kurung seperti ganjil() menjadi ganjil
angkaGanjil = ganjil;
console.log(angkaGanjil)

const angkaBaru = angka.filter(n => {
    return n < 6;
});

console.log(angkaBaru)
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

const animeOverrating = animes.filter(n => {
    if( n.rating > 90){
        // console.log(n);
        console.log(`ini adalah nama anime dgn rating di atas 95 nama anime ${n.title} dan rating ${n.rating}`)
    } else {
        console.log(`ini anime dgn rating 90 ke bawah, nama ${n.title} dan rating ${n.rating}`)
    }
});

animeOverrating