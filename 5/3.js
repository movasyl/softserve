function checkAge() {
    try {

        let age = prompt('Enter tou age');
        console.log(typeof age);

        if (age == '') {
            throw new Error('The field is empty! Please enter your age');
        } else if (!Number.isInteger(+age)) {
            throw new Error('not a number');
        } else if (age < 14) {
            throw new Error('You age < 14');
        } else {
            document.write('MOVIE....^)');
        }
    } catch (error) {
        alert(error);
    }
}
checkAge();