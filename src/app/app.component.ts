import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'examen_angular';
  stats: Statistique[] = [
    { id: "dgkdjgc98547gj5", title: "Âge moyen des hommes en France", value: 40.8 },
    { id: "jgj6894gjg6", title: "Âge moyen des femmes en France", value: 43.6 }
  ];

  to = setTimeout(() => {
    this.stats.push({ id: "kgjdkgj879khj", title: "Naissance en France en 2019", value: 753000 })
  }, 1000);
}
