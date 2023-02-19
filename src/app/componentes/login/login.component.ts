import { Component, OnInit,Input } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service.';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  loginError:string = "";

  form:FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private loginService:LoginService, private route:ActivatedRoute) { 
    
    //creamos el grupo de controles para el formulario de login
     this.form= this.formBuilder.group({
        password: ['',[Validators.required]],
        username:['',[Validators.required]]
     })
  }


  ngOnInit(): void {
  }

  
  get Password(){
    return this.form.get("password");
  }
 
  get Username(){
   return this.form.get("username");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get UsernameValid() {
    return this.Username?.touched && !this.Username?.valid;
  }
  
  onEnviar(event:Event){
       //detenemos la propagacion o ejecucion del compotamiento submit de un form
       event.preventDefault;

       if(this.form.valid){
           //llamamos a nuestro servicio para enviar los datos al servidor
           //tmb podriamos ejecutar alguna logica extra
       }else{
          this.form.markAllAsTouched();
       }
  }

      login(){

        const user = {username:this.username,password: this.password};

        this.loginService.login(user).subscribe(data => {
           if(data==null) this.loginError = "Error. Usuario incorrecto";
           else {
            this.loginError="";
            this.loginService.setToken(data.id);
            this.router.navigate(['/inicio'])
           }
        });
      }


  
}
