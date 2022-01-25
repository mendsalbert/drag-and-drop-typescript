//classes and interfaces typescript

class Department {
  name: string;
  private employee: string[] = [];
  constructor(n: string) {
    this.name = n;
  }

  addEmployee(name: string) {
    this.employee.push(name);
  }

  displayEmployee() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

var accounting = new Department("Accounting");
// accounting.addEmployee("Mends");
// accounting.addEmployee("Kofi");
// accounting.addEmployee("Albert");
// accounting.displayEmployee();

//Interfaces
interface Person {}

//advanced types
