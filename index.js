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
        return this.staff
    }

    addStaff(employee) {
        this.staff.push(employee)
    }
}

const naqiuddin = new Employee("Naqiuddin", 29, "Developer", "Digital Transformation");
const arthur = new Employee("Arthur", 6, "Cat Developer", "Digital Transformation");
const thomas = new Employee("Thomas", 5, "Cat Developer", "Digital Transformation");

const yeen = new Employee("Farahin", 29, "Senior Executive", "Human Capital");
const finn = new Employee("Finn", 3, "Cat Executive", "Human Capital");

const it = new Division("Information Technology", "Bangsar, MY", [naqiuddin, arthur])
const hr = new Division("Human Resource", "Cyberjaya, MY", [yeen, finn])

it.addStaff(thomas)
// arthur.getEmployee();

// it.getInformation();
const hr_staff = hr.getStaff();

const staff_farahin = hr_staff.filter((employee) => employee.name == 'Farahin')
// console.log(hr_staff[0]);
console.log(staff_farahin);

