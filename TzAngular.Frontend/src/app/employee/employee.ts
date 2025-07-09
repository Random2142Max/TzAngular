import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee, EmployeeService } from '../employee-service/employee-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { EmployeeModalComponent } from '../employee-modal/employee-modal';
import { error } from 'console';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})

export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  filteredEmployees: Employee[] = [];
  filters = { department: '', fullName: '', birthDate: '', hireDate: '', wages: '' };

  modalRef?: BsModalRef;

  newEmployee: Employee = { id: 0, department: '', fullName: '', birthDate: '',  hireDate: '', wages: 0};
  editEmployee: Employee = { id: 0, department: '', fullName: '', birthDate: '', hireDate: '', wages: 0 };
  employeeToDelete: Employee | null = null;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }
  
  loadEmployees(): void {
    this.employeeService.getEmployee()
    .subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  applyFilters() {
    this.filteredEmployees = this.employees.filter(employee =>
      (!this.filters.department || employee.department.includes(this.filters.department)) &&
      (!this.filters.fullName || employee.fullName.includes(this.filters.fullName)) &&
      (!this.filters.birthDate || new Date(employee.birthDate).toLocaleDateString() === new Date(this.filters.birthDate).toLocaleDateString()) &&
      (!this.filters.hireDate || new Date(employee.hireDate).toLocaleDateString() === new Date(this.filters.hireDate).toLocaleDateString()) &&
      (!this.filters.wages || employee.wages >= +this.filters.wages)
    );
  }

  openCreate() { 
    // Открыть модальное окно создания
    const modalRef = this.modalService.open(EmployeeModalComponent);

    modalRef.componentInstance.isEdit = false;

    modalRef.result.then((result: Employee) => {
      this.employeeService.addEmployee(result)
      .subscribe(() => this.loadEmployees());
    }, () => {});
  }

  openEdit(employee: Employee) {
    // Открыть модальное окно редактирования
    const modalRef = this.modalService.open(EmployeeModalComponent);

    modalRef.componentInstance.isEdit = true;
    modalRef.componentInstance.employee = { ...employee }; // копия объекта

    modalRef.result.then((updateEmployee: Employee) => {
      if (updateEmployee) {
        this.employeeService.updateEmployee(updateEmployee).subscribe({
          next: () => this.loadEmployees(),
          error: error => {
            console.error('Ошибка обновления:', error);
            alert('Ошибка обновления сотрудника');
          }
        });
      }
    })
    .catch((error) => {
      console.error("Ошибка изменения сотрудника", error);
    });
  }

  openDelete(employee: Employee) {
    // Открыть модальное окно удаления
    if (confirm(`Удалить сотрудника "${employee.fullName}"?`)) {
      this.employeeService.deleteEmployee(employee.id)
      .subscribe(() => this.loadEmployees());
    }
  }
}
