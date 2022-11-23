import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.css']
})
export class ComponentHeaderComponent implements OnInit {
  @Input() h1: any;
  constructor() { }

  ngOnInit(): void {
  }

}
