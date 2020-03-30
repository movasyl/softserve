// Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException
//  з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
};

function showMonthName(mounth) {
    try {
        if (+mounth >= 13 || +mounth < 1) {
            throw new MonthException('Incorrect month number');

        } else {
            switch (mounth) {
                case 1:
                    return `January`;
                    break;
                case 2:
                    return `February`;
                    break;
                case 3:
                    return `March`;
                    break;
                case 4:
                    return `April`;
                    break;
                case 5:
                    return `May`;
                    break;
                case 6:
                    return `June`;
                    break;
                case 7:
                    return `July`;
                    break;
                case 8:
                    return `August`;
                    break;
                case 9:
                    return `September`;
                    break;
                case 10:
                    return `October`;
                    break;
                case 11:
                    return `November`;
                    break;
                case 12:
                    return `December`;
                    break;
            }
        }
    } catch (error) {
        return error.message;
    }

}

console.log(
    showMonthName(0),
    showMonthName(1),
    showMonthName(3),
    showMonthName(8),
    showMonthName(12),
    showMonthName(13)
);