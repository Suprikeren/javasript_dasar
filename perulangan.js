// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// mendapatkan data array dgn perulangan for
// const anime = ['naruto', 'bleach', 'tokyo ghoul', 'dragonball', 'one piece']
// //length biasanya digunakan pada properti seperti panjang array atau panjang string.
// for (let i = 0; i <= anime.length; i++){
//     console.log(i, anime[i])
//     // console.log(anime[i]) // menampilakn elemen array tanpa indexnya
// }

// nested loop
// let str = 'LOL';
// for (let i = 0; i <= 4; i++){
//     console.log("Outer:", i);
//     for (let j = 0; j < str.length; j++){
//         console.log(' Inner:', str[j]);
//     }
// }

// const pilihan = "abcd";
// for (let i = 1; i<= 10; i++){
//     console.log(`${i}. Soal nomor ${i}:`);
//     for(let j = 0; j <= pilihan.length; j++ ){
//         console.log(`${pilihan[j]}. Pilihan Jawaban`);
//     }
// }

// mendapatkan Data Dari Nested Array dengan Nested Loop

const studentRow = [
    ['Olivia', 'Liam', 'Emma', 'Noah'],
    ['Amelia', 'Oliver', 'Ava', 'Elijah'],
    ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
];

// for(let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(row)
// }
for(let i = 0; i < studentRow.length; i++){
    const row = studentRow[i];
    console.log(`baris ke ${i + 1}`);
    for (let j = 0; j <= row.length; j++){
        console.log(`   ${row[j]}`);
    }
}