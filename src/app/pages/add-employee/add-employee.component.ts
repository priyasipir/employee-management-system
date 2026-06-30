import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule,SidebarComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee = {
    name:'',
    email:'',
    department:''
  };

  constructor(private employeeService: EmployeeService){}

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe((res)=>
    {
      alert('Employee Added');
console.log(res);
    });
  }

}
