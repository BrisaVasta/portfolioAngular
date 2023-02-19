import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/componentes/home/home.component';
import { AcercaDeMiComponent } from 'src/app/componentes/acerca-de-mi/acerca-de-mi.component';
import { ProyectosComponent } from 'src/app/componentes/proyectos/proyectos.component';
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { EducEditarComponent } from '../componentes/educ-yexperiencia/edu-editar/educ-editar.component';
import { ExpEditarComponent } from '../componentes/educ-yexperiencia/exp-editar/exp-editar.component';
import { ProyectosEditarComponent } from '../componentes/proyectos/proyectos-editar/proyectos-editar.component';
import { SkillEditarComponent } from '../componentes/skills/skill-editar/skill-editar.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},  
  {path: 'inicio', component:HomeComponent},
  {path: 'acerca-de-mi', component:AcercaDeMiComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'iniciar-sesion',component:LoginComponent},
  {path: "editarEducacion/:id", component : EducEditarComponent, pathMatch: 'full'},
  {path: "editarExperiencia/:id", component : ExpEditarComponent, pathMatch: 'full'},
  {path: "editarProyecto/:id", component : ProyectosEditarComponent, pathMatch: 'full'},
  {path: "editarSkill/:id", component : SkillEditarComponent, pathMatch: 'full'}

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{ }

