// DefinisiSebuahMethod
// Method ketika menambahkan function pada suatu object property
// suati function yang didefinikan dalam suatu object
const aritmatika = {
    perkalian: function (x, y) {
        return x * y
    },
    pembagi: function ( x, y ) {
        return x / y
    },
    kuadrat: function (x) {
        return x ** 2
    },
}

const kali = aritmatika.perkalian(3,4);
console.log(kali);
const bagi = aritmatika.pembagi(10,2);
console.log(bagi);
const pangkat = aritmatika.kuadrat(4);
console.log(pangkat)