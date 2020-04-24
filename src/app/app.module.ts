import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {InputPersonaComponent} from './persona/persona-input.component';

@NgModule({
  declarations: [
    AppComponent,PersonaComponent,InputPersonaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
