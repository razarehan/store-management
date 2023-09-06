import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  
  constructor(private http: HttpClient) { }

  sayHi() {
    return this.http.get<{ result: string }>('http://localhost:3000/hi');
  }
}
