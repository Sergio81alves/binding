import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentExercicioComponent } from './component-exercicio/component-exercicio.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentExercicioComponent,
    ComponentHeaderComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
