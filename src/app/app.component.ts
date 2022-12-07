import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pudim ='carro'
  favoriteColor = 'green'
  
  valorAtualizadoNoContador(novoValor:any){
    console.log('o novo valor é ', novoValor)
  }

  
  eventoRecebido($event: any){
    console.log("APPComponent Evento recebido", $event );  
  }

  constructor(){
   setTimeout(() => {
    this.pudim = "Eu gosto de musica e você?"
   }, 5000);
  }
  
}
