import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.css']
})
export class ComponentHeaderComponent implements OnInit {
  @Input() h1: any;

  constructor() {
    setTimeout(() => {
      this.h1 = 'Mudamos para portuges'
    }, 5000);
   }

  ngOnInit(): void {
  }

}
