import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';

import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    ListeComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
