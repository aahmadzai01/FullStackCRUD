import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';

@Component({
  selector: 'app-ajour-car',
  templateUrl: './ajour-car.component.html',
  styleUrls: ['./ajour-car.component.css']
})
export class AjourCarComponent implements OnInit {
vot: Voiture = new Voiture();
  constructor(private voirureService:VoitureService,
    private httpClient:HttpClient,
    private activeRoute:ActivatedRoute,
    private _router : Router) { }
// save to url cods 
    saveCar(){
      this.voirureService.saveCar(this.vot).subscribe(
        data=>{
          console.log('response',data);
          this._router.navigateByUrl('/carlist');
        }
      )
    }
// here we defined all geting by id
  ngOnInit(): void {
    const isIdPresent = this.activeRoute.snapshot.paramMap.has('id');
    if(isIdPresent){
      const id = +this.activeRoute.snapshot.paramMap.get('id');
      this.voirureService.getcar(id).subscribe(
        data => this.vot=data
      )
    }
  }

}

