import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadFeacture = 'recipes';
  onNavigate(feacture: string) {
    this.loadFeacture = feacture;
    console.log('esto es ' + this.loadFeacture);
  }
}
