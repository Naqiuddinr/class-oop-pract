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


class Division {
    constructor(name, office, staff) {
        this.name = name,
            this.office = office,
            this.staff = staff
    }

    getInformation() {
        console.log({ name: this.name, office: this.office, staff: this.staff })
    }

    getStaff() {
        console.log({ staff: this.staff })
    }
}

const naqiuddin = new Employee("Naqiuddin", 29, "Developer", "Digital Transformation");
const arthur = new Employee("Arthur", 6, "Cat Developer", "Digital Transformation");

const it = new Division("Information Technology", "Bangsar, MY", [naqiuddin, arthur])

// arthur.getEmployee();

it.getStaff();

