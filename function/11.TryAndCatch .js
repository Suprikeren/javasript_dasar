//try {
    // try adalah proses membuat logic dan lain'
//} catch {
    // Blok catch menangkap dan menangani error yang terjadi di dalam blok try
    // Parameter 'error' adalah objek yang berisi informasi tentang error yang terjadi
    // tambahkan parameter error untuk mengetahui pengertian ke 2
//}

// contoh 


// try {
//     saya.kenalan();
// } catch {
//     console.log('error');
// }
// saya.kenalan();
// hasilnya akan error karena method saya tidak ada
// contoh 2

function teriak(msg){
    try {  
        console.log(msg.toUpperCase());
    } catch (error){
        console.log(error)  // untuk menampilkan pesan error secara default
        console.log('gunakan tipe string pada argumet') //untuk menampilkan pesan error sesuai keinginan kita
    }
}

teriak('Supri'); // ganti parameter dgn tipe selain string untuk menampilkan catch