class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + ' ' + this.surname;

    }
};

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        super.showFullName();
        return (this.name + ' ' + this.surname + ' ' + midleName);
    }
    showCourse() {
        let currentYear = new Date();
        let course = currentYear.getFullYear() - this.year;
        if (course >= 1 && course <= 6) {
            return course;
        } else {
            return 'Закінчив навчання';
        }
    }
}
var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4


