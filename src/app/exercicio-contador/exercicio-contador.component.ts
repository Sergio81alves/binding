
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.css']
})
export class ExercicioContadorComponent{

  @Input() valor = 0
  @Output() valorChange = new EventEmitter();

  incrementrar(): void{
    this.valor ++;
    this.valorChange.emit(this.valor);
  }
  decrementrar(){
    this.valor--;
    this.valorChange.emit(this.valor);
  }

}
