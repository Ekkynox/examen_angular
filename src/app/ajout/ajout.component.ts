import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../service/statistique.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  id!: string;
  title!: string;
  value!: number;

  constructor(private statServ: StatistiqueService) { }

  ngOnInit(): void {
  }

  addStat(form: NgForm) {
    this.statServ.stats.push(new Statistique(this.id, this.title, this.value));
    form.reset();
  }

}
