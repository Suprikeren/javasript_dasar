// parameter dan argument
// serupa tapi tak sama
// contoh
// function greet( name ) {
//     console.log(`Hi, ${name}`)
// }
// greet('Jason') //jason adalah parameter
// name yang ada didalam kurung, itu adalah parameter, jadi apapun didalam kurung itu adalah parameternya
// sedangkan Jason saat greet di panggil itu adalah parameternya

// jadi argument atau parameter adalah input yang bisa dipanggil
// contoh 1
function nyanyi(nota){
    if (nota == 'do'){
      console.log(`ini adalah nota do`)
    } else {
      console.log('ini bukan nota do')
    }
  }
  nyanyi('re');

//   nota adalah parameternya
// sedangkan re adalah argumentnya
// ubah re menjadi do agar mengasilkan nilai "ini adalah do"
// contoh 2

function selamatPagi(name) {
    console.log(`Halo, ${name}. Selamat Pagi!`)
}

selamatPagi('supri')
// ingat name adalah parameter
// supri adalah argument