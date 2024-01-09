// SetTimeout Dan SetInterval // callback function yang bukan berasal dari array. fungsinya untuk memberi waktu jeda dan melakukan perulangan setiap waktu yang ditentukan.
// setTimeout (()=>{
//     // process
// }, 3000) //proses akan dieksekusi setelah 3 detik

// setInterval(()=>{
//     //process
// }, 2000) //akakn melakukan pross secara berulang setiap 2 detik

// perbedaan setTimeout dgn setInterval adalah setTimeout prosesnya akan di jalankan setelah waktu yang ditentukan sedangkan interval adalah melakukan proses secara berulang dalam  waktu yang di tentukan,

// contoh setTimeout

// console.log('Halo...');

// setTimeout(()=> {
//     console.log(`masih disana gak?`);  
// }, 5000); //menunggu 5 detik baru dijalankan

// console.log('saya pergi yah'); // ini akan lebih dulu dieksekusi dari pada setTimeoutnya, 

// contoh setInterval

setInterval(() =>{
    console.log(Math.random())
}, 2000);

// dia akan memberikan nilai random secara berulang setiap 2 detik dgn sendirinya, secara terus menerus
