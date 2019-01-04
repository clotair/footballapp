import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateCompService } from '../create-comp.service';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() idmacht;
  idpoule
  result:Subject<any[]>= new Subject();
  macth  = {poule:'',id:'',equipes:[{equipe:'',but:0},{equipe:'',but:0}],status:'jouer',statistique:[]}
  constructor(
    private comp:CreateCompService
  ) { }

  ngOnInit() {
    this.comp.matchEquipesProvide.subscribe((e)=>{
      if(e['id']!=this.idmacht)return false;
      e= e ['matchEquipe']
      if(e['status']){
        let t =[]
        t = e['message']
        
        if(t){
          this.macth.poule=e['poule'];
          this.macth.equipes[0].but = t[0].but1;
          this.macth.equipes[1].but = t[0].but2;
          this.macth.equipes[0].equipe = t[0].equipe1.id
          this.macth.equipes[1].equipe = t[0].equipe2.id
          this.result.next(t);
        }
        
      }
    })
    this.comp.get_equipes_match(this.idmacht)
  }
  save(){
    if(sessionStorage.getItem('user')){
      this.macth.id = JSON.parse( sessionStorage.getItem('user'))['tournois'][0];
    
    this.comp.update_match(this.macth,this.idmacht).subscribe((e)=>{
      if(e['status']){
        alert('match update')
      }
    })
  }
}
}
