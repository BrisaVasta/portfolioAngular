import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service.';


@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

  uLogged:string="";

  constructor( private loginService:LoginService, private route:Router) {  }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();

  }

    salir():void{
      this.loginService.deleteToken();
      this.uLogged="";
      window.location.reload()
    }
   
    login():void{
      this.route.navigate(['/iniciar-sesion'])
    }
}
