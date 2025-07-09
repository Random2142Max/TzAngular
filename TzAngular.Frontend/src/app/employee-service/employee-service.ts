import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  department: string;
  fullName: string;
  birthDate: string;
  hireDate: string;
  wages: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5180/api/Employees'

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<void> {
    employee.birthDate = this.formatDateToInput(employee.birthDate);
    employee.hireDate = this.formatDateToInput(employee.hireDate);

    return this.http.put<void>(`${this.apiUrl}/${employee.id}`, employee);
  }
  
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private formatDateToInput(date: string | Date): string {
    if (!date) {
      return '';
    }

    const d = new Date(date);
    
    return d.toISOString().substring(0, 10);
  }
}
