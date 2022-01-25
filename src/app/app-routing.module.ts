import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: "liste", component: ListeComponent },
  { path: "ajout", component: AjoutComponent },
  { path: "**", redirectTo: "liste" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
