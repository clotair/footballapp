import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PhasePouleComponent } from './phase-poule/phase-poule.component';
import { QuartComponent } from './quart/quart.component';
import { DemiComponent } from './demi/demi.component';
import { FinaleComponent } from './finale/finale.component';
import { NewCompComponent } from './new-comp/new-comp.component';

const routes: Routes = [
  {path: 'competition',component:MainComponent, data: { animation: 'competition' },
  children:[
    {path:'phase_poule',data:{animation:'poul'},component:PhasePouleComponent},
    {path:'quart',data:{animation:'quart'},component: QuartComponent},
    {path:'demi',data:{animation:'demi'},component: DemiComponent},
    {path:'finale',data:{animation:'finale'},component: FinaleComponent},
    {path:'',component:NewCompComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule { }
