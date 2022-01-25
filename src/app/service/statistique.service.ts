import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  stats!: Statistique[]

  constructor(private http: HttpClient) {
    this.getStat();
  }

  getStat() {
    lastValueFrom(this.http.get<Statistique[]>("https://stats.naminilamy.fr/")).then(res => this.stats = res);
  }
}
