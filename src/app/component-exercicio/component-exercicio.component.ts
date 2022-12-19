import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-exercicio',
  templateUrl: './component-exercicio.component.html',
  styleUrls: ['./component-exercicio.component.css']
})
export class ComponentExercicioComponent implements OnInit {
  @Input() palavra: any;
  @Input() color: any;
  @Output() clicad = new EventEmitter();
  
  valorContador = 10
  title = 'data_victor';
  urlImagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Castillo_de_Eilean_Donan_%28Escocia%29.jpg/800px-Castillo_de_Eilean_Donan_%28Escocia%29.jpg?20110823110615';

  value = 'valor Inicial';
  isdisabled = true;
  accessibilityText= 'Um texto para esibir no accessibilityText';
  valorDoInput = '';
  

  constructor() {
    setTimeout(() => {
      this.isdisabled = false;
      console.log('is disabled', this.isdisabled)
    }, 3000);
   }

  ngOnInit(): void {
  }

  
  clicou($event: any){
    console.log('Clicou!', $event);
  }
  clicado($event:  any){
    this.valorDoInput = $event.target.value
    console.log($event)
  }

  PassouMouse(){
    console.log('O mouse foipassado aqui ')
  }
  onClickBotaoEmissor($event: any){
    console.log('Devo emitir informações para o component pai. ');
    this.clicad.emit(true);
  }
}
