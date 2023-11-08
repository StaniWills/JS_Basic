// Objeckt

let user = {
    name: 'Stas',
    age: 25,
    contry: 'Deutschland',
    isAdmin: true
}
delete user.contry
console.log(user);

// alert('Hello'+' '+ user.name)

//-------------------------

// for in
for(let key in user){        
console.log(user[key]);
}

//-------------------------

// Создайте объект car с характеристиками автомобиля: name - Toyota, case type -
// sedan, production year - 2019, color - black.
// Выведите свойства объекта car в консоль.

let car ={
    name: 'Toyota',
    caseType: 'sedan',
    productionYear: 2019,
    color: 'black'
}

let car1 ={
    name: 'Mercedes',
    caseType: 'hatchback',
    productionYear: 2022,
    color: 'black'
}

let car2 ={
    name: 'Ford',
    caseType: 'coupe',
    productionYear: 2021,
    color: 'black'
}


// console.log(car.name, car.caseType, car.productionYear, car.color);

// Выведите в консоль все свойства объекта car, созданного в задаче  в виде
// «ключ: значение».

// for(let key in car){
//     console.log(`${key}: ${car[key]}`); // 1 - это ключб 2 - значение ключа
// }

//-------------------------

// Создайте функцию calcAge(car), которая принимает в качестве аргумента объект
// car, созданный в задаче . Далее функция выводит следующую информацию:
// "Автомобиль новый", если он выпущен не более двух лет назад, "Автомобиль б/у" - в
// ином случае.
// PS: Для получения текущего года используйте конструкцию: new Date().getFullYear().

// let calcAge = (auto) => {
// let carAge = new Date().getFullYear() - auto.productionYear;
//     if(carAge < 2){
//         console.log('Car is New');
//     } else {
//         console.log('Car is not New');
//     }
    
// }

// calcAge(car1)

//-------------------------

// Создайте функцию getCountry(car), которая принимает в качестве аргумента объект
// car, созданный в задаче. Далее функция выводит следующую информацию:
//  "Автомобиль произведен в Японии" – ели марка авто Toyota,
//  "Автомобиль произведен в Европе", - если марка авто Mercedes,
//  "Автомобиль произведен в США" – если марка авто Ford.

let getCountry = (auto) => {
    if(auto.name === 'Toyota'){
        console.log('Автомобиль произведен в Японии');
    } else if ( auto.name === 'Mercedes'){
        console.log('Автомобиль произведен в Европе');
    } else if (auto.name === 'Ford'){
        console.log('Автомобиль произведен в США');
    }
}

getCountry(car1)