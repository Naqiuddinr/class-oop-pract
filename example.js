class Employee {
    constructor(employeeName, age, position, department) {
        this.employeeName = employeeName;
        this.age = age;
        this.position = position;
        this.department = department;
    }

    getEmployee() {
        console.log({ employeeName: this.employeeName, age: this.age, position: this.position, department: this.department })
    }

    setName(employeeName, newEmployeeName) {
        if (employeeName === this.employeeName) {
            this.employeeName = newEmployeeName
        }
    }

    setAge(employeeName, newAge) {
        if (employeeName === this.employeeName) {
            this.age = newAge
        }
    }

    setPosition(employeeName, newPosition) {
        if (employeeName === this.employeeName) {
            this.position = newPosition;
        }
    }

    setDepartment(employeeName, newDepartment) {
        if (employeeName === this.employeeName) {
            this.department = newDepartment;
        }
    }
}


class Division extends Employee {
    constructor(divisionName, office, staff) {
        super();
        this.divisionName = divisionName;
        this.office = office;
        this.staff = staff;
    }

    getInformation() {
        console.log({ divisionName: this.divisionName, office: this.office, staff: this.staff })
    }

    getStaff() {
        return this.staff
    }

    addStaff(employee) {
        this.staff.push(employee)
    }
}

//create 2 employee of same department
const Naqiuddin = new Employee("Naqiuddin", 29, "Fullstack Developer", "Solution Engineering")
const Arthur = new Employee("Arthur", 6, "Cat Developer", "Animal Engineering")

// Naqiuddin.getEmployee();
// Arthur.getEmployee();

//create a Division which containes the 2 developers
const IT = new Division("Information Technology", "Bangsar, MY", [Naqiuddin, Arthur]);

IT.getInformation();