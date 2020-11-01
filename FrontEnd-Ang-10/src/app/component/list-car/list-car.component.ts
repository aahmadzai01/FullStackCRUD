import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Voiture } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';


@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  
  vot:Voiture []=[];
  constructor( private voitureService:VoitureService,
    private httpClient:HttpClient,
    private router:Router) { }

  
  ngOnInit(): void {
    this.voitureService.getvot().subscribe(
      data =>this.vot=data
    )
  }

  DeleteCar(id:number){
    this.voitureService.DeleteCar(id).subscribe(
      data =>{
        console.log('delete reponse',data)
        this.router.navigateByUrl('/carlist')
      }
    )
  }

}
