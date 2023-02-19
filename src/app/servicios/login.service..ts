import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://portfolio-nuevo.onrender.com/login';

 

  constructor(private http:HttpClient,private cookies:CookieService) { }

  

  public login(user:any):Observable<any>{
    return this.http.post(this.url, user);
  }

  public getUser(id:number):Observable<any>{
    return this.http.get(this.url+'/getUser' + id);
  }


  //token

  setToken(token:string){
    this.cookies.set("token", token);
  }
  getToken(){
    return this.cookies.get("token");
  }

  deleteToken(){
    return this.cookies.delete("token");
  }

  getUserLogged(){
    const token = this.getToken();
    return token;
  }
}
