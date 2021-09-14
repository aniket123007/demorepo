import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    welcome {{name}}
    </h2>
    <input [id] = "myId" type = "text" value="Aniket">
    <h2 class="text-success">Aniket</h2>
    <h2 [class]="successClass">Aniket</h2>
  
    `,
  styles : [`
  .text-success{
    color:green;
  }
  
  .text-danger{
    color:red;
  }
  .text-special{
    color:green;
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  //title = "this is test componenet";
  public name = "Hello world";
  public myId = "testId";
  public successClass = "text-success";
  constructor() { }

  ngOnInit(): void {
  }


  greetUser(){
    return "Hello " + this.name;
  }
}
