import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'examen_angular';
  stat1: Statistique = { id: "dgkdjgc98547gj5", title: "Âge moyen des hommes en France", value: 40.8 };
  stat2: Statistique = { id: "jgj6894gjg6", title: "Âge moyen des femmes en France", value: 43.6 };
}
