import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia';
import { EducYexpService } from 'src/app/servicios/educ-yexp.service';

@Component({
  selector: 'app-exp-editar',
  templateUrl: './exp-editar.component.html',
  styleUrls: ['./exp-editar.component.css']
})
export class ExpEditarComponent {



  exp:experiencia = new experiencia(0,"","","","","");
  

  

  constructor( private serviceEduYExp: EducYexpService ,private activatedRouter : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.serviceEduYExp.traerExperiencia(id).subscribe(
        data =>{ this.exp = data;
      });
    };
    
    


    editarExp(){
    const id = this.activatedRouter.snapshot.params['id'];
    const experiencia  = {id,puesto:this.exp.puesto, anioIni: this.exp.anioIni, anioFin: this.exp.anioFin, descripcion:this.exp.descripcion, empresa:this.exp.empresa};

    this.serviceEduYExp.editarExperiencia(id, experiencia).subscribe(data => {
         }
      );
    this.router.navigate(['/inicio'])
    }
  
}
