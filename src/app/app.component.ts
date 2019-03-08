import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  title = 'app';
  map: any = { lat: 23.036406, lng: 72.561066 };
  origin = { lat: 24.799448, lng: 120.979021 }
  destination = { lat: 24.799524, lng: 120.975017 }

}
