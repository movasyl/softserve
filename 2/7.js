// Спосіб 1:
let currentHour = new Date().getHours();
switch (true) {
    case 23:
    case currentHour < 5:
        console.log('Доброї ночі');
        break;
    case currentHour >= 5 && currentHour < 11:
        console.log('Доброго ранку');
        break;
    case currentHour >= 11 && currentHour < 17:
        console.log('Доброго дня');
        break;
    case currentHour >= 17 && currentHour < 23:
        console.log('Доброго вечора');
        break;
}

// Спосіб 2:
currentHour < 5 ?
    console.log('Доброї ночі')
    : currentHour >= 5 && currentHour < 11 ? console.log('Доброго ранку')
        : currentHour >= 11 && currentHour < 17 ? console.log('Доброго дня')
            : currentHour >= 17 && currentHour < 23 ? console.log('Доброго вечора')
                : console.log('Доброї ночі');
