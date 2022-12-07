
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.css']
})
export class ExercicioContadorComponent{

  @Input() valor = 0
  @Output() valorMudou = new EventEmitter

  incrementrar(){
    this.valor ++;
    this.valorMudou.emit(this.valor);
  }
  decrementrar(){
    this.valor--;
    this.valorMudou.emit(this.valor);
  }

}
