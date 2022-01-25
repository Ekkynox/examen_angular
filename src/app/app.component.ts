import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './service/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'examen_angular';

  constructor(public statServ: StatistiqueService) {

  }
}
