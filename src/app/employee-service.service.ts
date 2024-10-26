import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT'
  };

  getEmployee() {
    return { ...this.employee };
  }

  updateEmployeeName(newName: string) {
    this.employee.name = newName;
  }
}
