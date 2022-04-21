import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  n:number=10;//member variable
  place="Enter your name";
  dis:boolean=false;
  name:string="Nithiya";
  name1:string="Hello"
  constructor() { }
  
  ngOnInit(): void {
  }
  ngOnChanges() {
    
  }
  fun(){
    return "hello"
  }
  welcome()
  {
    alert ("WELCOME");
  }
}
