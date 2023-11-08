// IF ELSE
//1
// let name = prompt('Enter Name please'); 

// if(name === 'admin') {              // Если
//     console.log('Welcome Admin');
// } else if(name === "stas") {        //Иначе если
//     console.log('Hello Stas');
// } else {
//     console.log('Hello User');      //Иначе (Во всех остальных случаях)
// }

//2
// let age = prompt('Please enter your Age')
// let useStatus = null;

// if (age < 18) {
//    useStatus = 'Child';
// } else {
//    useStatus = 'Adult'
// }

// let useStatus = (age > 18) ? 'Adult' : 'Child' // Тернанрый оператор
// console.log(useStatus);

//Task
// При помощи диалогового модального окна prompt запросите у пользователя его
// любимое животное. Далее, в зависимости от ответа, выведите в консоль одно из
// следующих сообщений:
//  «И мы очень любим кошек» (если пользователь ввел «кошка»);
//  «Собаки такие умные» (если пользователь ввел «собака»);
//  «Попугаи умеют разговаривать» (если пользователь ввел «попугай»);
//  «К сожалению, не знаем такого животного» (если пользователь ввел любое
// другое животное).

// let animal = prompt('Please enter yors Animal');
// //1
// let messege = null;
// if(animal === 'cat'){
//     messege = 'We love Cats';
// } else if(animal === 'dog'){
//     messege = 'We love Dogs';
// } else if(animal === 'leon'){
//     messege = 'We love Leons';
// } else { 
//     messege = 'Sorry no Animal';
// }
// console.log(messege);

//2
// if(animal === 'cat'){
//     console.log('We love Cats');
// } else if(animal === 'dog'){
//     console.log('We love Dogs');
// } else if(animal === 'leon'){
//     console.log('We love Leons');
// } else { 
//         console.log('Sorry no Animal');
// }

//Task 2
let answer = '1'; 
//let result = null;

// if ( answer === true ) {
// result = true;
// } else {
// result = false;
// }

let result = answer ? true : false; //Ternar
console.log(result);





