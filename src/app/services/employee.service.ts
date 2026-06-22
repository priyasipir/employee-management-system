import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  apiUrl = 'http://localhost:5000';

constructor(private http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addEmployee`, data);
  }

getEmployees(): Observable<any> {
  return this.http.get (`${this.apiUrl}/employees`);
}

deleteEmployee(id: string){
  return this.http.delete(`${this.apiUrl}/employee/${id}`);
}

updateEmployee(id: string, data: any){
  return this.http.put(`${this.apiUrl}/employee/${id}`,data);
}

}
