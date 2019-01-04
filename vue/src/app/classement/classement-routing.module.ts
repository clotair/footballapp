import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PouleComponent } from './poule/poule.component';
import { JoueurComponent } from './joueur/joueur.component';

const routes: Routes = [
  {path: 'classement',data:{animation:'classement'},component:MainComponent,
  children:[
    {path:'poules',data:{animation:'poul'},component: PouleComponent},
    {path:'joueurs',data:{animation:'joueur'},component: JoueurComponent},
    {path:'', component:PouleComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassementRoutingModule { }
