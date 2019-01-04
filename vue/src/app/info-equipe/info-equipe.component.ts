import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { CreateCompService } from '../competition/create-comp.service';

@Component({
  selector: 'app-info-equipe',
  templateUrl: './info-equipe.component.html',
  styleUrls: ['./info-equipe.component.css']
})
export class InfoEquipeComponent implements OnInit {
  equipes:Subject<any>= new Subject()
  constructor(private route:ActivatedRoute,private location:Location,private comp:CreateCompService) { 
    
  }

  ngOnInit() {
  
    this.get_e()
  }
  back(){
    this.location.back()
  }
  back1(name){
    location.pathname = '/stat/equipe/'+ name
  }
  get_e(){
    const id= ''+this.route.snapshot.paramMap.get('id');
    console.log(id)
    $.getJSON(`/stats/equipe/${id}`,(data)=>{
      if(data['status']){
        this.equipes.next(data)
      }else{
        this.back()
      }
    })
  }
}
