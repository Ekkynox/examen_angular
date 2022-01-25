import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../service/statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() stat!: Statistique;

  constructor(private statServ: StatistiqueService) { }

  ngOnInit(): void {
  }

  deleteStat(delStatTitle: string) {
    for (let i = 0; i < this.statServ.stats.length; i++) {
      if (this.statServ.stats[i].title == delStatTitle) {
        this.statServ.stats.splice(i, 1);
      }
    }
  }

}
