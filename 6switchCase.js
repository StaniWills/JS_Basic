//Switch Case - analog if...else

let result = 5 + 2;


// if (result === 3) {
//     console.log('malenkoe chislo')
// } else if (result === 5) {
//     console.log('bolshoe hislo')
// } else if (result == 4) {
//     console.log('chislo vernoe')
// } else {
//     console.log('net takix chisel');
// }

// switch(result) {
//     case 3:
//         console.log('malenkoe chislo')
//         break; // используется для остановки проверок после правильного кейса
//     case 5:
//         console.log('bolshoe hislo')
//         break;
//     case 4:
//         console.log('chislo vernoe')
//         break;
//     default: // срабатывает для всех остальных случаев. Похожее на else {...}
//         console.log('net takix chisel');
// }


// if (result === 3 || result === 5) {
//     console.log('neprawelnoe chislo');
// } else if (result === 4){
//     console.log('prawelnoe chislo');
// } else {
//     console.log('net takix chisel');
// }

// switch (result) {
//     case 3:
//     case 5:
//         console.log('neprawelnoe chislo')
//         break
//     case 4: 
//         console.log('prawelnoe chislo')
//         break
//     default:
//         console.log('net takix chisel')
// }

// Aufgabe 1
// Перепишите код с использованием конструкции switch.
// let day = prompt('Введите день недели', 'понедельник');
// if ( day === 'суббота' || day === 'воскресенье' ) {
// console.log( 'Сегодня выходной' );
// }
// else {
// console.log( 'Сегодня рабочий день' );
// }

// let day = prompt('Введите день недели', '');

// switch(day){
//     case 'montag':
//     case 'dinstag':
//     case 'mitwoch':
//     case 'donnerstag':
//     case 'freitag':
//         console.log( 'Сегодня рабочий день' )
//         break
//     case 'Samstag':
//     case 'Sonntag':
//         console.log( 'Сегодня выходной' )
//         break

//     default:
//         console.log('not Found Day')
// }


// Aufgabe 2
// При помощи конструкции switch выведите в консоль предметы, которые зависят от
// цвета, хранящегося в переменной color, используя данные таблицы:

// let color = 
// Цвет      Предмет
// желтый    солнце
// красный   помидор
// зеленый   трава
// оранжевый апельсин
// синий     небо

// let color = prompt('Enter the Color');
// switch(color){
//     case 'yellow':
//         console.log('sun');
//         break
//     case 'red':
//         console.log('tomato');
//         break
//     case 'green':
//         console.log('grass');
//         break
//     case 'orange':
//         console.log('orange fruit');
//         break
//     case "blue":
//         console.log('sky');
//         break
//         default:
//         console.log('not Found')
// }