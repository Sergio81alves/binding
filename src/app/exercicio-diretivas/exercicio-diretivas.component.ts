import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css']
})
export class ExercicioDiretivasComponent {

  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Limão',
    'Abacate',
  ];

  ListaCarros = [{
    id: '1',
    placa: 'JND-7438',
    cor: 'Preto',
  },
  {
    id: '2',
    placa: 'DJN-3874',
    cor: 'Green',
  },
  {
    id: '3',
    placa: 'NDJ-7438',
    cor: 'Branco',
  },
  {
    id: '4',
    placa: 'BFG-7438',
    cor: 'Vermelho',
  }
];
  condition = true;

  trocarValor(){
    this.condition = !this.condition;
     
  }
}
