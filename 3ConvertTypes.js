// Преобразование типов данных

// let num = '6'
// console.log(typeof(num));

// let result = num / 2;
// console.log(typeof(result));

// let result2 = +num + 2;
// console.log(result2);


//String()
let value = true;
console.log(typeof(value));

value = String(value)
console.log(value);


//Number()
let num = '10';
console.log(+num);

let num2 = Number(num);
console.log(num2);

let str = '';
console.log(+str);      // 0

let str2 = 'hello';
console.log(Number(str2)); // NaN

console.log(+' 123     ');

console.log(+true);     // 1
console.log(+false);    //0

//Boolean()

console.log(Boolean(undefined)); //false
console.log(Boolean(null));      //false

console.log(Boolean(1));        //true  
console.log(Boolean(0));        //false

console.log(Boolean(''));       //false
console.log(Boolean('hello'));  //true
console.log(Boolean('0'));      //true


//Task
// Код, представленный ниже, должен вычислять сумму двух чисел. Но выполнение
// этого кода приводит к неожиданному результату. В чем кроется ошибка и как ее
// исправить?
// let num1 = +prompt( "Введите первое число" );
// let num3 = +prompt( "Введите второе число" );
// alert( `Сумма двух чисел равна ${num1 + num3}` );

//Task2 
// Емкость бассейна составляет 2000 л. Напишите скрипт, который запрашивает у
// пользователя, сколько воды уже набралось в бассейн (предполагается, что
// пользователь введет число от 0 до 2000). Далее скрипт вычисляет процент
// набранной воды от общей емкости бассейна и выводит результат в модальном
// окне.
let fullPool = 2000;
let valueWater = +prompt('Enter the nummber');
alert(`Count of water ${valueWater / fullPool * 100} %`);















