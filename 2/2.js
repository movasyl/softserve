let num = +prompt('Enter a number');

if (num > 0) {
    !(num % 2) && !(num % 7) ? console.log(`число парне & кратне 7`)
        : !(num % 2) ? console.log(`число парне`)
            : !(num % 7) ? console.log(`число кратне 7`)
                : console.log(`введене число не відповідає умові`);




} else {
    console.log(`число від'ємне`);
}