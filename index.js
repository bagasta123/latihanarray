// const value = 5;

// if (value === 5) {

//     console.log('nilainya adalah 5')
// } else {
//     console.log('nilainya bukan 5')
// }

// const nilai = 3;
// let grade;

// switch(nilai) {

//     case1:
//     grade = 'E';
//     break;

//     case2:
//     grade = 'D';
//     break;
//     case3:
//     grade = 'C';
//     break;

//     case4:
//     grade = 'B';
//     break;

//     case5:
//     grade = 'A';
//     break;
//     default:
//         grade = '-';
// }

// console.log(grade);

// const value = 6;
// const isOdd = value % 2 === 0 ? true : false;

// console.log (isOdd);

// for (let i = 0; i<5; ++i) {

//     console.log("hello world");
// }

// let j = 5;
// console.log(++j);
// console.log(j);

// ForEach
// const values = [1,2,3,4,5];

// for (i in values) {
//     console.log(values[i]);
// }

// console.log('\n');

//     function loop(value, index) {
//     console.log(`${index}: ${value}`);
// }

// values.forEach(loop);

// While
// let confirm = prompt('Mau Ulang?');
// while (confirm) {
//     confirm = prompt('Mau ulang?');
// }

// Do While

// const val = 5;
// do {
//     console.log('masuk');

// } while (val > 10);

// Array
// const myArray = [1,3,5,7,9];
// console.log(myArray);
// console.log(myArray[3]);

// myArray[3] = 6;
// console.log(myArray[3]);

//Object
// const user = {
//     firstName: 'Bagasta',
//     lastName: 'Sinaga',
// }
// user.lastName = '-'
// console.log(user.lastName);

const users = [
    {
        firstName : 'Bagasta'
    },
    {
        firstName : 'Asto'
    },
    {
        firstName : 'Kevin'
    }
]

console.log(users);
users.forEach((user) => console.log(user.firstName));