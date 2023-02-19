import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service.';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  nombre: string ='';
  porcentaje: string ='';
  uLogged:string="";
  skillData:any;
  constructor( private skillService:SkillService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged(); 
    this.skillService.verSkills().subscribe(data =>{
      
      this.skillData=data;
    });
  }


  agregarSkill(){
    const skill  = {nombre: this.nombre, porcentaje:this.porcentaje};
    this.skillService.agregarSkill(skill).subscribe(data => {
      
       }
    );
    alert("Skill agregado! Recargue la pagina para ver los cambios");
  };

  eliminar(s:any){
    this.skillService.borrarSkill(s).subscribe();
    alert("Skill eliminado! Recargue la pagina para ver los cambios");
  }
}
