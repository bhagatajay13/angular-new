import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  public employees = [];
  // employeeService gives the instance of MyServiceService
  constructor(private employeeService: MyServiceService) {}

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }
}
