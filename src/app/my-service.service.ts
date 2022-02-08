import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable() // when we want to inject one service into another service this decorator is required
export class MyServiceService {
  constructor(private http: HttpClient) {}
  private _url: string = 'https://jsonplaceholder.typicode.com/todos';
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }
}
