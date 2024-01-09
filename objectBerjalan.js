// membuat object berjalan

const orang = {
    nama: 'Supri',
    usia: 22,
    kelas: 'A'
}



orang.nama = 'ichika'
orang.usia = 22
orang.usia = 'B'

console.log(orang)

// memanggil object dalam ARRAY

const shoppingCart = [
    {
        product: 'vue.js',
        price : 1.22,
        quantity: 3
    },
    {
        product: 'ract.js',
        price : 2.32,
        quantity: 1
    },
    {
        product: 'vue.js',
        price : 3.32,
        quantity: 2
    }
]

console.log(shoppingCart)
// memanggil sesuai keynya
console.log(shoppingCart[0])
console.log(shoppingCart[0].price) //hasil 1.22 karena price dari key ke 0 adalah 1.22