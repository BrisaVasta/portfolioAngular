import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { AcercaDeMiService } from 'src/app/servicios/acerca-de-mi.service';
import { LoginService } from 'src/app/servicios/login.service.';


@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

    
   
    uLogged: string="";
   
    miInfo:  persona= new persona(0,"","","",0,"","","","") ;
    constructor( private acercaDeMi:AcercaDeMiService, private loginService:LoginService) { }

    ngOnInit(): void {
      
      this.uLogged = this.loginService.getUserLogged(); 
      this.acercaDeMi.verPersona( ).subscribe(data =>{
        this.miInfo=data;
      });
    }
 

    
    editarInfo(){ 
      const persona  = {id:1, nombre: this.miInfo.nombre, titulo:this.miInfo.titulo, telefono: this.miInfo.telefono,edad:this.miInfo.edad, email:this.miInfo.email,ciudad:this.miInfo.ciudad, urlPerfil:this.miInfo.urlPerfil, urlBanner:this.miInfo.urlBanner};
      this.acercaDeMi.editarPersona(persona).subscribe(data => {
        window.location.reload()
        }
      );
    }


}
