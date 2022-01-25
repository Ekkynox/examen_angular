import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../service/statistique.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  id!: string;
  title!: string;
  value!: number;

  constructor(private statServ: StatistiqueService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  addStat(form: NgForm) {
    let stat = new Statistique(this.id, this.title, this.value);
    this.statServ.stats.push(stat);
    form.reset();

    lastValueFrom(this.http.post<Statistique>("https://stats.naminilamy.fr/", JSON.stringify(stat)))
      .then(res => {
        console.log("ok");
      }, error => {
        console.log("pas ok")
      })
  }

}
