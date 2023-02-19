import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'https://portfolio-nuevo.onrender.com/proyecto';

  constructor(private http: HttpClient) { }


  public agregarProyecto(proyec: any): Observable<any> {
    return this.http.post(this.url + '/agregarProyecto', proyec);
  }

  public verProyectos(): Observable<any> {
    return this.http.get(this.url + '/verProyectos');
  }

  public borrarProyecto(p: any): Observable<any> {
    return this.http.delete(this.url + '/borrarProyecto/' + p.id);
  }
  public traerProyecto(id: number): Observable<any> {
    return this.http.get(this.url + '/traerProyecto/' + id);
  }

  public editarProyecto(id: number, p: any): Observable<any> {
    return this.http.put<any>(this.url + `/editarProyecto/${id}`, p);
  }

}
