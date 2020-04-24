 import { Component,Input } from '@angular/core';

@Component({
  selector:'app-persona',
  templateUrl:'persona.component.html',
  styleUrls:['persona.component.css']
 })

export class PersonaComponent {
 titulo="Bienvenido a Angular 9";

  //@Input() alumnos:string[]=['Giovanni','Adan','Robles','Leo','Yuri','Luis'];
  alumnos:string[]=['Giovanni','Adan','Robles','Leo','Yuri','Luis'];

  //edades:number[]=[22,35,67,43,32,46];

  @Input() listaalumnos:string[];
}
