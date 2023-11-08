//function - 

// //1
// schowMessege()
// function schowMessege(){
//     console.log('Hello world'); //function declaration - можно вызвать до ее создания
// }

// //2
// let schowMessege2 = function (){
//     console.log('Hello world2'); //function expression
// }
// schowMessege2()

//3
// let schowMessege3 = () => {
//     console.log('Hello world3'); //function arrow
// }
// schowMessege3()
//-------------------------

// let sayHi = (message, name = "anonym") => {
//     console.log(`${message}, ${name}`);
// }
// sayHi('Hello', 'Stas')
// sayHi('bye')
// sayHi('how old are you','Stas')

//-------------------------

// let sum = (num1, num2) => {
//    return num1 + num2
// } 
// let result = sum(10,15)
// alert(result)

// let calcPrice = (price, deliveryPrice = 0) => {
//     return price + deliveryPrice
// }
// alert(calcPrice(100,30))

//-------------------------

// let checkAge = (age) => {
//     if (age < 18){
//         return('Enter Dancel')
//     } else if (age >= 18){
//         return('You are welcome')
//     } 
// }

// let years = prompt('How old are yor?');
// alert(checkAge(years))

//-------------------------

// Напишите функцию compare(a,b), которая сравнивает числа a и b:
//  Если a = b, функция возвращает строку "числа (a) и (b) равны"
//  Если a > b, функция возвращает строку "число (a) больше числа (b)"
//  Если a < b, функция возвращает строку "число (a) меньше числа (b)".

// let compare = (a, b) => {
//     if(a === b){
//         return(`числа ${a} и ${b} равны`)
//     } else if(a > b){
//         return(`число ${a} больше числа ${b}`)
//     } else if(a < b){
//         return(`число ${a} меньше числа ${b}`)
//     }
// }
// alert(compare(8,6))

//-------------------------

// Написать функцию getArea(), которая через модальные окна запрашивает у
// пользователя значения ширины и высоты прямоугольника, а затем выводит в
// консоль площадь этого многоугольника.
// Если на одном из окон нажата "отмена", в консоль выводится null.

// let getArea = () => {
//     let width =  prompt('enter width');
//     let height = prompt('enter height');

//     if (width === null || height === null){
//         console.log(null);
//     } else {
//         let area = width * height;
//         console.log(area);
//     }
// }
// getArea()

//-------------------------

// Создайте функцию getShoes(), которая:
//  Вначале при помощи диалогового модального окна спрашивает у
// пользователя, сколько игроков в футбольной команде;
//  Затем для каждого игрока при помощи диалоговых модальных окон
// запрашивает его имя, затем - размер кроссовок;
//  Полученная информация записывается в общий результат в формате:
// - Алекс: 43--Стив:44- (и так далее);
//  Функция возвращает общий результат (какие размеры обуви у игроков
// футбольной команды).

// function getShoes(){
//     let gamers = prompt('how players in football team');
//     let result = "";
//     for( let i = 1; i <= gamers; i++) {
//         let name = prompt('whats you name?')
//         let size = prompt('what yor are size?')

//         result = result + ` - ${name} : ${size} --`
//     }

//     return result;
// }
// alert(getShoes())

//-------------------------

// Написать функцию getCar(country), которая в качестве параметра принимает одно
// из трех значений country: USA, Germany, Japan и возвращает в зависимости от этого
// значения 'Tesla', 'Mercedes' или 'Toyota'.



// let getCar = (country) => {
//     if(country == 'USA'){
//         return('Tesla');
//     } else if(country == 'Germany'){
//         return('Mersedes');
//     } else if(country == 'Japan'){
//         return('Toyota')
//     } else {
//         return('We dont no this Car')
//     }
// }

// console.log(getCar("Japan"));

// let car = getCar("Germany")
// console.log(car);

// let car2 = getCar("China")
// console.log(car2);

//-------------------------

// let getHello = () => {
//     let name = prompt('Please enter your Name')
//     let age = prompt('Please enter your Age')
//     return `Hello ${name} (${age})`
// }
// let info = getHello();
// alert(info);

//-------------------------

// let getNickName = () => {
//     let name = prompt('Please enter your Name')
//     let secondName = prompt('Please enter your secondName')
//     let birthYear = prompt('Please enter your birthYear')

//     console.log(`Your nick: ${name[0]}.${secondName}${2023 - birthYear}`)
// }
// getNickName();

//-------------------------

// Напишите стрелочную функцию getType(variable), которая возвращает тип
// переменной variable. Например, результатом выполнения функции getType(“apple”)
// будет string.
//
//-------BSP!!!!
// let func = (name, secondName = "anonim") => {
//     //что-то делает c именем
//     console.log(name, secondName)
// }
// func("Stas", "Wills")
// func("John")
//-------BSP!!!!

// let getType = (variable) => {
//     return typeof(variable);
// }
//  let type1 = getType("apple")
//  let type2 = getType(45)
//  let type3 = getType(true)

//  console.log(type1,type2,type3)

//-------------------------