//classes and interfaces typescript
var Department = /** @class */ (function () {
    function Department(n) {
        this.employee = [];
        this.name = n;
    }
    Department.prototype.addEmployee = function (name) {
        this.employee.push(name);
    };
    Department.prototype.displayEmployee = function () {
        console.log(this.employee.length);
        console.log(this.employee);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.addEmployee("Mends");
accounting.addEmployee("Kofi");
accounting.addEmployee("Albert");
accounting.displayEmployee();
