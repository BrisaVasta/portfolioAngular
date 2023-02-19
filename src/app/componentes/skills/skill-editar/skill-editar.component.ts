import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skill-editar',
  templateUrl: './skill-editar.component.html',
  styleUrls: ['./skill-editar.component.css']
})
export class SkillEditarComponent {



 
  skill: skill = new skill(0,"","");

  constructor( private skillService: SkillService ,private activatedRouter : ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.skillService.traerSkill(id).subscribe(
        data =>{ this.skill = data;
      });
    };
    
    


    editarSkill(){
    const id = this.activatedRouter.snapshot.params['id'];
    const skill  = {id, nombre: this.skill.nombre, porcentaje:this.skill.porcentaje};

    this.skillService.editarSkill(id, skill).subscribe(data => {
         }
      );
    this.router.navigate(['/inicio'])
    }

    
}
