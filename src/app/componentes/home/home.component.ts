import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { HomeService } from 'src/app/servicios/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  miInfo: persona = new persona(0,"","","",0,"","","","");
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.verPersona().subscribe(data =>{
      this.miInfo=data;
    });
  }


}
