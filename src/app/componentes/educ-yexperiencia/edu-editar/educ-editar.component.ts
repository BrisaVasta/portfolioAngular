import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion';
import { EducYexpService } from 'src/app/servicios/educ-yexp.service';
import { EducYExperienciaComponent } from '../educ-yexperiencia.component';

@Component({
  selector: 'app-educ-editar',
  templateUrl: './educ-editar.component.html',
  styleUrls: ['./educ-editar.component.css']
})
export class EducEditarComponent implements OnInit{

  
  
  
  puesto: string='';
  empresa:string='';

  

  educ: educacion = new educacion(0,"","","","","",);

  constructor( private serviceEduYExp: EducYexpService ,private activatedRouter : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.serviceEduYExp.traerEducacion(id).subscribe(
        data =>{ this.educ = data;
      });
    };
    
    


    editarEduc(){
    const id = this.activatedRouter.snapshot.params['id'];
    const educacion  = {id, titulo:this.educ.titulo, anioIni: this.educ.anioIni, anioFin: this.educ.anioFin, descripcion:this.educ.descripcion, institucionEduc: this.educ.institucionEduc};
    
    this.serviceEduYExp.editarEducacion(id, educacion).subscribe(data => {
         }
      );
      this.router.navigate(['/inicio'])
    }
  
}
