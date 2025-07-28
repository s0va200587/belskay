

// 1 задание

let password = 'пароль';
let userPass = prompt('Введите пароль');
if (userPass === password) {
    alert('Пароль введен верно')
} else alert('Пароль введен неверно')

// 2 задание

let c = 7;
if (c >= 0 && c <=10 ) {
    alert('верно')
} else alert('неверно')

// 3 задание

let d = 7;
let e = 22;
if (d > 100 || e > 100 ) {
    alert('верно')
} else { 
    alert('неверно')
}

// 4 задание

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);

// 5 задание

let monthNumber = Number(prompt('Введите номер месяца'));

if (monthNumber >= 13) {
    alert('Вы ввели некорректное число')
} else {
    switch (monthNumber) {
        case 1: 
        case 2:    
        case 12:   
            alert('Сезон: Зима!') 
            break;
        case 3: 
        case 4:     
        case 5:   
            alert('Сезон: Весна!') 
                break;
        case 6: 
        case 7:     
        case 8:    
            alert('Сезон: Лето!') 
            break;
        case 9:
        case 10:    
        case 11:    
            alert('Сезон: Осень!') 
            break;   
    }
}