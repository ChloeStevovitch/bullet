import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bullet';
  colorScale = ["transparent", "green", "orange", "red"]
  days = ['Mon', 'Tue', "Wed", 'Thu', 'Fri', 'Sat', 'Sun']
}
