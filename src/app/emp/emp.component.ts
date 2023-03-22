import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee() {
    this.api.getEmployee().subscribe({
      next: (result) => {
        console.log(result)
        this.employees = result;
      },
      error: (err) => {
        console.log('Hiba');
      }
    });
  }
}
