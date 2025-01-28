//single responsibiloty 
//open close principle 
class ManageSalaries {
    constructor() {
      this.salaryRates = [
        { id: 1, role: 'developer', rate: 100 },
        { id: 2, role: 'architect', rate: 200 },
        { id: 3, role: 'manager', rate: 300 },
      ];
    }
  
    calculateSalaries(empId, hoursWorked) {
      let salaryObject = this.salaryRates.find((o) => o.id === empId);
      return hoursWorked * salaryObject.rate;
    }
  }
  
  const mgtSalary = new ManageSalaries();
  console.log("Salary : ", mgtSalary.calculateSalaries(1, 100));
  //correct way  of doing this - 
//add this function in class
  addSalaryRate(id, role, rate) {
    this.salaryRates.push({ id: id, role: role, rate: rate });
  }

//liskov subsitution principle - ostrich bird animal exaple
//interface - shape acubiod and three dimesional 
//dependency inversion principle with the help of usehooks in react js export fetching logic and using hooks to get teh data 
class MySqlConnection {
    connect() { /* */ }
}

class PasswordReminder {
    constructor() {
        this.dbConnection = new MySQLConnection();
    }
}

// Refactor
class MySqlConnection {
    connect() { /* */ }
}
class PostgreSqlConnection {
    connect() { /* */ }
}

class PasswordReminder {
    constructor(connection) {
        this.dbConnection = connection
    }
}
