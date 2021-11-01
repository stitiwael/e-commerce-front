import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  flag:boolean = true

  apply(value:string){
    this.flag = value == "login"?true : false;
  }
  
}
