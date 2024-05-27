class Employee {
    constructor(name, age, position, department) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.department = department;
    }

    getEmployee() {
        console.log({ name: this.name, age: this.age, position: this.position, department: this.department })
    }

    setName(name, newName) {
        if (name === this.name) {
            this.name = newName
        }
    }

    setAge(name, newAge) {
        if (name === this.name) {
            this.age = newAge
        }
    }

    setPosition(name, newPosition) {
        if (name === this.name) {
            this.position = newPosition;
        }
    }

    setDepartment(name, newDepartment) {
        if (name === this.name) {
            this.department = newDepartment;
        }
    }
}

class Department extends Employee {
    constructor(name, division) {
        super(name);
        this.division = division
    }
}

const naqiuddin = new Employee("Naqiuddin", 29, "Developer", "Digital Transformation");

naqiuddin.getEmployee();
