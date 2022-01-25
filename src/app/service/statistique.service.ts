import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  stats: Statistique[] = [
    { id: "dgkdjgc98547gj5", title: "Âge moyen des hommes en France", value: 40.8 },
    { id: "jgj6894gjg6", title: "Âge moyen des femmes en France", value: 43.6 }
  ];

  constructor() { }
}
