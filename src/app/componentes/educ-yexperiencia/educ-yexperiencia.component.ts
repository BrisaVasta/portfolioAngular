import { Component, EventEmitter, OnInit, Output } from '@angular/core';//importamos el core de componentes de angular
import { EducYexpService } from 'src/app/servicios/educ-yexp.service';
import { LoginService } from 'src/app/servicios/login.service.';


@Component({
  selector: 'app-educ-yexperiencia', //con selector definimos el nombre con el cual se va a llamar o montar al component
  templateUrl: './educ-yexperiencia.component.html', //definimos el archivo html del template del componente
  styleUrls: ['./educ-yexperiencia.component.css'] //cargamos los archivos de estilo
})
export class EducYExperienciaComponent implements OnInit { //exportamos la clase para ser usada dentro de nuestro proyecto

  educList: any;
  expList:any;


  titulo: string= '';
  anioIni: string= '';
  anioFin: string= '';
  institucionEduc: string= '';
  descripcion: string= '';
  puesto: string='';
  empresa:string='';

  uLogged:string="";

  constructor(  private serviceEduYExp:EducYexpService , private loginService:LoginService ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged(); 
    this.serviceEduYExp.verEducacion().subscribe(data =>{
      this.educList=data;
    });

    this.serviceEduYExp.verExp().subscribe(data =>{
      this.expList=data;
    });

  }

  agregarEdu(){

    const educacion  = {titulo:this.titulo, anioIni: this.anioIni, anioFin: this.anioFin, descripcion:this.descripcion, institucionEduc: this.institucionEduc};

    this.serviceEduYExp.agregarEducacion(educacion).subscribe(data => {
       }
    );
    alert("Educacion agregada! Recargue la pagina para ver los cambios");
  }
  eliminarEdu(educ:any){
    this.serviceEduYExp.borrarEducacion(educ).subscribe();
    alert("Educacion eliminada! Recargue la pagina para ver los cambios");
  }




  agregarExp(){

    const experiencia  = {puesto:this.puesto, anioIni: this.anioIni, anioFin: this.anioFin, descripcion:this.descripcion, empresa:this.empresa};
    this.serviceEduYExp.agregarExp(experiencia).subscribe(data => {
       });
     alert("Experiencia agregada! Recargue la pagina para ver los cambios");

  }
  eliminarExp(exp:any){
    this.serviceEduYExp.borrarExp(exp).subscribe();
    alert("Experiencia eliminada! Recargue la pagina para ver los cambios");
  }
  
 
}
