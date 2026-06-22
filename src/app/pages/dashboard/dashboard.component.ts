import { Component, OnInit } from '@angular/core';
import { RouterLink, Router} from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  totalEmployees =0;
  departments = 0;
  projects = 3;

  recentEmployees: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeService){ }
  logout() {
    alert("Log out");
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data:any)=> {
      this.totalEmployees = data.length;
      const uniqueDepartments = [...new Set(data.map((e: any)=>e.department))];
      this.departments = uniqueDepartments.length;
    });

    this.employeeService.getEmployees().subscribe((data: any)=> {
      this.recentEmployees = data.slice(-5).reverse();
    });
  }
  

}
