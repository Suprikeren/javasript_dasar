// Statement Return Pada Function
// sebenarnya setelah ada return tidak boleh lagi ada kegiatan
// function jumlahkan(a = 0, b = 0){
//     const total = a + b;
//     return total;
// }

// const hasilPenjumlahan = jumlahkan(3,4)
// console.log(hasilPenjumlahan)

function tambah(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }
    return a + b;
}