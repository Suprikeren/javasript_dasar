//  "higher-order function" karena ia mengembalikan sebuah fungsi (function) sebagai hasilnya.
// mengembalikan fungsi lain berdasarkan kondisi ertentu


function hasilnyaAdalahFunction(){
    const rand = Math.random()
    if (rand > 0.10) {
        return function(){
            console.log('selamat, angkanya lebih besar');
        };
    } else {
        return function() {
            console.log('maaf, mungkin bisa coba lagi');
        }
    }
}

const hasil = hasilnyaAdalahFunction();
hasil()
