import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];

  selectedEmployee: any = null;

  searchText:string ="";

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      alert('Employee Deleted');
      this.ngOnInit();
    });
  }

  editEmployee(emp: any) {
    this.selectedEmployee = { ...emp };
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.selectedEmployee._id, this.selectedEmployee).subscribe(() => {
      alert('Employee Updated');
      this.selectedEmployee = null;
      this.ngOnInit();
    });
  }

  filteredEmployees() {
    return this.employees.filter(emp=> emp.name.toLowerCase().includes(this.searchText.toLowerCase())
  )};
}