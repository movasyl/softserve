class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }
    get showExp() {
        return this.#experience;
    }
    set setExp(exp) {
        if (exp > 0) {
            this.#experience = exp;
        } else {
            console.error(`значення повинно бути додатнім`);

        }
    }

};

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName, 'sallary:', worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName, 'sallary:', worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName, 'sallary:', worker2.showSalary());
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName, 'sallary:', worker2.showSalaryWithExperience());

worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName, 'sallary:', worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName, 'sallary:', worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName, 'sallary:', worker3.showSalaryWithExperience());

worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName, 'sallary:', worker3.showSalaryWithExperience());

