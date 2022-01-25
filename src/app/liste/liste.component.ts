import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../service/statistique.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(public statServ: StatistiqueService) { }

  ngOnInit(): void {
  }

}
