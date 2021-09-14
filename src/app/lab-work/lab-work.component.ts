import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-work',
  template: `
  ID<input [(ngModel)]="id" type="text" value = "id"><br>
  Name<input [(ngModel)]="name" type="text" value = "name"><br>
  Salary<input [(ngModel)]="salary" type="text" value = "salary"><br>
  Department<input [(ngModel)]="department" type="text" value = "department"><br>
  {{id +" "+ name +" "+ salary +" "+ department}}

  <h2>{{"Hello "+ parentData}}</h2>
  <button (click)="call()">Click</button>



  `,
  styleUrls: ['./lab-work.component.css']
})
export class LabWorkComponent implements OnInit {
  public name= "";
  public id= "";
  public salary= "";
  public department= "";
  @Input() 
  public parentData = "";
  
  
  call(){
    console.log(this.parentData);
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
