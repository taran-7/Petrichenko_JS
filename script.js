// https://www.udemy.com/course/javascript_full/learn/quiz/5521400#overview

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
// (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со
// значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
//
//     Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть
//     строку "При вычислении произошла ошибка"
//
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того,
// что этот оператор из более нового стандарта, чем тут доступен.
//
//     Примеры:
//
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
//
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
//
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
//
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
//
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'


function cube(sizeCube) {

    if ( typeof (sizeCube) !== 'number' || sizeCube < 0 || sizeCube === 'string') {
        return "При вычислении произошла ошибка"
    }

    let volume = sizeCube * sizeCube * sizeCube
    let area = 6 * (sizeCube * sizeCube)
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`
}


function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);



// Задачи:
//
//     1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
//
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
//
//     Пример:
//
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
//
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
//
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
//
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
//
// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
//
//     Пример:
//
// findMaxNumber(1, 5, 6.6, 11); =>  11
//
// findMaxNumber(1, 5, '6', '10');  =>  0

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
//
//     Пример:
//
// findMaxNumber(1, 5, 6.6, 11); =>  11
//
// findMaxNumber(1, 5, '6', '10');  =>  0


function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');