import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module.ts/app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducYExperienciaComponent } from './componentes/educ-yexperiencia/educ-yexperiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EducEditarComponent } from './componentes/educ-yexperiencia/edu-editar/educ-editar.component';
import { ExpEditarComponent } from './componentes/educ-yexperiencia/exp-editar/exp-editar.component';
import { ProyectosEditarComponent } from './componentes/proyectos/proyectos-editar/proyectos-editar.component';
import { SkillEditarComponent } from './componentes/skills/skill-editar/skill-editar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    AcercaDeMiComponent,
    EducYExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    EducEditarComponent,
    ExpEditarComponent,
    ProyectosEditarComponent,
    SkillEditarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
