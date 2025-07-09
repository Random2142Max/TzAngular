import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee-service/employee-service';

@Component({
  selector: 'app-employee-modal',
  standalone: false,
  templateUrl: './employee-modal.html',
  styleUrl: './employee-modal.css'
})
export class EmployeeModalComponent {
  private _birthDate: string = '';
  private _hireDate: string = '';

  @Input() employee: Employee = {
    id: 0,
    department: '',
    fullName: '',
    birthDate: '',
    hireDate: '',
    wages: 0
  };

  @Input() isEdit: boolean = false;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if (this.employee) {
      this.employee.birthDate = this.formatDateToInput(this.employee.birthDate);
      this.employee.hireDate = this.formatDateToInput(this.employee.hireDate);
    }
  }
  
  formatDateToInput(value: string | Date): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);

    return date.toISOString().substring(0, 10);
  }

  get birthDate(): string {
    return this._birthDate;
  }

  set birthDate(value: string) {
    if (!value) {
      this._birthDate = '';
      return;
    }

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      this._birthDate = '';
    } else {
      // Преобразуем в строку формата yyyy-MM-dd
      this._birthDate = date.toISOString().substring(0, 10);
    }
  }
  
  get hireDate(): string {
    return this._hireDate;
  }

  set hireDate(value: string) {
    if (!value) {
      this._hireDate = '';
      return;
    }

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      this._hireDate = '';
    } else {
      // Преобразуем в строку формата yyyy-MM-dd
      this._hireDate = date.toISOString().substring(0, 10);
    }
  }

  save() {
    this.activeModal.close(this.employee);
  }

  cansel() {
    this.activeModal.dismiss();
  }
}
