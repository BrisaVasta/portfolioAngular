import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service.';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  titulo: string= '';
  anioFin: string= '';
  descripcion: string= '';
  proyectosList: any;

  uLogged:string="";


  constructor(private serviceProyecto:ProyectoService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged(); 
    this.serviceProyecto.verProyectos().subscribe(data =>{
      this.proyectosList=data;
    });
  }

  agregarProyecto(){

    const proyecto  = {titulo:this.titulo, anioFin: this.anioFin, descripcion:this.descripcion};

    this.serviceProyecto.agregarProyecto(proyecto).subscribe(data => {
       }
    );
    alert("Proyecto agregado! Recargue la pagina para ver los cambios");
  }

  eliminar(proye:any){
    this.serviceProyecto.borrarProyecto(proye).subscribe();
    alert("Proyecto eliminado! Recargue la pagina para ver los cambios");
  }


}
