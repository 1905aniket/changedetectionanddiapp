import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
 
  @Input() employeeName: string='';
  @Input() employeeData!: { id: number; name: string; position: string; department: string };

  constructor(private employeeService: EmployeeService) {}

  updateEmployeeInChild() {
    this.employeeService.updateEmployeeName('Sani Yusuf');
    this.employeeData = this.employeeService.getEmployee(); 
  }


 

}
