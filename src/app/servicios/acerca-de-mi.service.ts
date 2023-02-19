import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeMiService {

   url = 'https://portfolio-nuevo.onrender.com/persona/';

  constructor(private http:HttpClient) { }



  public editarPersona(p:persona):Observable<any>{
    return this.http.put(this.url+'editarPersona', p);
  }

  public verPersona():Observable<persona>{ 
    return this.http.get<persona>(this.url+'verPersona/' + 1);
  }

  

}