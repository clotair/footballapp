import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoEquipeComponent } from './info-equipe/info-equipe.component';



const routes: Routes = [
  {path:'stat/equipe/:id',component:InfoEquipeComponent},
  { path: '',   redirectTo: '/resultat', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
