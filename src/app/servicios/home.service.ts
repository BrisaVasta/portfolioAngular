import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://portfolio-nuevo.onrender.com/persona/';
  constructor(private http:HttpClient) { }


  public verPersona():Observable<any>{
    return this.http.get(this.url+'verPersona/'+1);
  }
}
