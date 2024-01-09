// cara mudah untuk melakukan perulangan pada tipe data object dan array
// for ... of adalah car baru di javascript
// for (variable of iterable) {
//     statement
// }
// prulangan for of dpada array
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango','Rambutan'];

// for (let fruit of fruits) {
//     console.log(`Buah ${fruit}`)
// }
// // nested array dgn for of

// const studentRow = [
//     ['Olivia', 'Liam', 'Emma', 'Noah'],
//     ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//     ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
// ];

// for (let row of studentRow){
//     for (let studentd of row) {
//         console.log(student)
//     }
// }

// perulangan for of pada object dgn for in

// for(let variable in iterable){
//     statement
// }

const studentScore = {
    Olivia: 20,
    Liam : 13,
    Emma : 40,
    Noah : 18,
    Amelia : 32,
    Oliver : 10,
    Ava : 11,
    Elijah : 21,
    Sophia: 14,
    Mateo : 22,
};

for (let student in studentScore){
    console.log(`${student} memliki skor ${studentScore[student]}`);
}

