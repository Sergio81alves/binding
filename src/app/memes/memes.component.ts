import { Component, } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './dados';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
  IMAGENS_AGRUPADAS = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA


  

}
