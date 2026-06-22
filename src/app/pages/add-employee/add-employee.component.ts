import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
