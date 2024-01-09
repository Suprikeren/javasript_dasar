// Object This Di Dalam Arrow Function Mengarah Pada Object Global Window
// ini function biasa
// const person = {
//     firstName: 'John',
//     lastName : 'Doe',
//     fullName: function (){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const hasil = person.fullName();
// console.log(hasil)
// diatas contoh this function biasa

const person = {
    firstName: 'John',
    lastName : 'Doe',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

// jdi pada arrow function this nya menuju pada global window bukan person