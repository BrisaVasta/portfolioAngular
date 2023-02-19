import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducYexpService {

  url = 'https://portfolio-nuevo.onrender.com/educacion/';
  urlExp = 'https://portfolio-nuevo.onrender.com/experiencia/';

  constructor(private http:HttpClient) { }


  public agregarEducacion(educacion:any):Observable<any>{
    return this.http.post(this.url+'agregarEducacion', educacion);
  }


  public verEducacion():Observable<any>{
    return this.http.get(this.url+  'verEducacion'); 
  }

  public borrarEducacion(educ:any):Observable<any>{
    return this.http.delete(this.url+ 'borrarEducacion/'+ educ.id);
  }

  public traerEducacion(id:number):Observable<any>{
    return this.http.get(this.url+'traerEducacion/'+id);
  }

  public editarEducacion(id:number ,educ:any):Observable<any>{
    return this.http.put<any>(this.url+ `editarEducacion/${id}`,educ);
  }




  public agregarExp(exp:any):Observable<any>{
    return this.http.post(this.urlExp+'agregarExperiencia', exp);
  }


  public verExp():Observable<any>{
    return this.http.get(this.urlExp+ 'verExperiencias');
  }

  public borrarExp(exp:any):Observable<any>{
    return this.http.delete(this.urlExp+ 'borrarExperiencia/'+ exp.id);
  }

  public traerExperiencia(id:number):Observable<any>{
    return this.http.get(this.urlExp+'traerExperiencia/'+id);
  }

  public editarExperiencia(id:number ,exp:any):Observable<any>{
    return this.http.put<any>(this.urlExp+ `editarExperiencia/${id}`,exp);
  }
}
