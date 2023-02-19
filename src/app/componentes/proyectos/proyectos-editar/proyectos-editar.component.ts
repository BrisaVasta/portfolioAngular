import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos-editar',
  templateUrl: './proyectos-editar.component.html',
  styleUrls: ['./proyectos-editar.component.css']
})
export class ProyectosEditarComponent {


  
  proyec: proyecto = new proyecto(0,"","","");

  constructor( private serviceProyecto: ProyectoService ,private activatedRouter : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.serviceProyecto.traerProyecto(id).subscribe(
        data =>{ this.proyec = data;
      });
    };
    
    


    editarProyecto(){
    const id = this.activatedRouter.snapshot.params['id'];
      const proyecto  = {id, titulo:this.proyec.titulo, anioFin: this.proyec.anioFin, descripcion:this.proyec.descripcion};

    this.serviceProyecto.editarProyecto(id, proyecto).subscribe(data => {
         }
      );
    this.router.navigate(['/inicio'])
    }
}
