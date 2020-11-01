import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from '../model/voiture';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
private getUrl:string='http://localhost:8081/api/v1/vot';

  constructor( private httpClient:HttpClient) { }
//get all data
  getvot():Observable<Voiture[]>{
    return this.httpClient.get<Voiture[]>(this.getUrl).pipe(map(response=>response))
  }
//save from url 
  saveCar(voiture:Voiture):Observable<Voiture>{
    return this.httpClient.post<Voiture>(this.getUrl, voiture);
  }
// getbyid
getcar(id:number):Observable<Voiture>{
  return this.httpClient.get<Voiture>(`${this.getUrl}/${id}`).pipe(map(response =>response))
}

// delete any by ID numbers
DeleteCar(id:number):Observable<any>{
  return this.httpClient.delete(`${this.getUrl}/${id}`, {responseType:'text'});
}
}


