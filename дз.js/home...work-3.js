// 1 завдання


const random = prompt('Введіть число від 55 до 99 включно');

if (random >= 55 && random <= 99) {
    alert ('Число потрапляє в діапазон');
} 

else{
    alert ('Число не потрапляє в діапазон')
}


// 2 завдання


const age = 'Якщо Максу 55 років,він дорослий';
console.log(age);


// 3 завдання


const firstname = 'Lera';
const secondname = 'Yakovleva';

if(firstname.length > 4 && secondname.length > 5 ) {
    alert (firstname.length + secondname.length);
} 

else{
    alert ('УПС') 
}


// 4 завдання


const NUMBER = Math.random() * (5 - 1) + 1;
const randomnumber = parseInt(NUMBER);

if (randomnumber === 1) {
    console.log('Випало число 1');
}
else if (randomnumber === 2){
    console.log('Випало число 2');
}
else if (randomnumber === 3){
    console.log('Випало число 3');
}
else if (randomnumber === 4){
    console.log('Випало число 4');
}
else{
    console.log('Випало число 5');
}


// 5 завдання


const lang = prompt ('Оберіть мову');
switch (lang) {
    case 'ua':
        console.log('Жовтень');
        break;
    case 'en':
        console.log('October');
        break;
    case 'ru':
        console.log('Октябрь');
        break;
    case 'fr':
        console.log('Octobre');
        break;
    default: console.log(lang);
        break;
}