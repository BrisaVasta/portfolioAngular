import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  url = 'https://portfolio-nuevo.onrender.com/skill/';
  constructor(private http:HttpClient) { }


  public agregarSkill(skill:any):Observable<any>{
    return this.http.post(this.url+'agregarSkill', skill);
  }
  
  public verSkills():Observable<any>{
    return this.http.get(this.url+'verSkills');
  }

  public borrarSkill(s:any):Observable<any>{
    return this.http.delete(this.url+ 'borrarSkill/'+ s.id);
  }
  public traerSkill(id:number):Observable<any>{
    return this.http.get(this.url+'traerSkill/'+id);
  }

  public editarSkill(id:number ,exp:any):Observable<any>{
    return this.http.put<any>(this.url+ `editarSkill/${id}`,exp);
  }
}
