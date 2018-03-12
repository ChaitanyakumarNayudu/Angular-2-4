import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  count: number = 1;
  agreed=0;
  disagreed=0;

  names = ['chaitanya', 'charan', 'Rajarshi', 'Renuka', 'Bhargavi'];

  updateCount(event) {
    event ? this.agreed++: this.disagreed++;
  }
  
  reset() {
    this.count = 0;
  }
}
