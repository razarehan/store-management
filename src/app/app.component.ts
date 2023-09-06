import { Component } from '@angular/core';
import { ControllerService } from './controller.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response!:string;
  constructor(private ctrlService:ControllerService) { }

  getResponse() {
    this.ctrlService.sayHi().subscribe(res => {
      this.response = res.result;
    });
  }
}
