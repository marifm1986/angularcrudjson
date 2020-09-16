import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice1';

  students: any[] = [
    {
      name: "arif"
    },
    {
      name: "asif"
    },
    {
      name: "Mehboob"
    },
  ]

  isActive: any;

  onClick(std: any) {
    this.isActive = std;
  }
}
