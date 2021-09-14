import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp-inter',
  template: `
  <button (click) = "call()">Click</button>
  `,
  styleUrls: ['./comp-inter.component.css']
})
export class CompInterComponent implements OnInit {

  @Input()
  public msg="";

  @Output()
  public event = new EventEmitter();

  call(){
    console.log(this.msg);
    this.event.emit("resposnse from child");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
