import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `<h1>{{name}}</h1>
  <input type = "text" value = "name">
  `,
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name = "Binding";
  constructor() { }

  ngOnInit(): void {
  }

}
