// this adalah keyord untuk memanggil suatu property pada object yang sama. Tujuannya untuk mendapatkan nilainya.
// this cara memanggil properti yang ada pada object
const saya = {
    nama: 'Aim',
    hobi: 'Mancing Ikan',
    kenalan: function(){
        return `Hi, saya ${this.nama}. Hobi saya ${this.hobi}`;
    }
}
// saya.nama = 'supri'

// const kenalan = saya.kenalan();
// console.log(kenalan)
console.log(saya.kenalan())