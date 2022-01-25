import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  stats!: Statistique[]

  constructor(private http: HttpClient) {
    this.getStat();
    this.connectToWs();
  }

  getStat() {
    lastValueFrom(this.http.get<Statistique[]>("https://stats.naminilamy.fr/")).then(res => this.stats = res);
  }

  connectToWs(): void {
    webSocket("wss://ac88n1oa17.execute-api.eu-west-3.amazonaws.com/dev").subscribe(
      (msg: any) => { this.stats.push(msg.object); console.log(msg) }, // Called whenever there is a message from the server.
      (err: any) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => { console.log('connection stopped, retrying'); this.connectToWs() } // Called when connection is closed (for whatever reason).
    );
  }
}
