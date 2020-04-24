import { Component } from '@angular/core';

@Component({
  selector:'app-persona-input',
  templateUrl:'persona-input.component.html',
  styleUrls:['persona-input.component.css']
})
export class InputPersonaComponent{

  alumnoInput='';
  onAgregarAlumno(nombreAlumno:string){
    console.log("Alumno Agregado : "+nombreAlumno);
  }
  // onCrearPersona(personName:string)
  onCrearPersona(){
    console.log("alumno creado "+this.alumnoInput);
    this.alumnoInput='';
    //console.log("Alumno Creado "+ personName);
  }
}
