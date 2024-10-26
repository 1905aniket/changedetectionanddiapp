import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers:[EmployeeService]
})
export class ParentComponent {


  employeeName: string;
  employeeData: { id: number; name: string; position: string; department: string };

  constructor(private employeeService: EmployeeService) {
    this.employeeData = this.employeeService.getEmployee();
    this.employeeName = this.employeeData.name;
  }

  updateEmployeeName() {
    this.employeeName = 'Rupert Stocks';
  }

  updateEmployeeData() {
    this.employeeData = { ...this.employeeData, name: 'Rupert Stocks' };
  }


}
