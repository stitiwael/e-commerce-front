import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  

  constructor(@Inject(DOCUMENT) private document: Document,
  private router: Router
  ) { }
  therichpost_open() {
    document.getElementById("mySidebar")!.style.display = "block";
    document.getElementById("myOverlay")!.style.display = "block";
  }
  therichpost_close() {
    document.getElementById("mySidebar")!.style.display = "none";
    document.getElementById("myOverlay")!.style.display = "none";
  }

  ngOnInit(): void {
  }

  subscribe(){
    this.router.navigate(['subscribe'])
  }
  user(){
    this.router.navigate(['users'])
  }
  view_details(){
    this.router.navigate(['detail-produit'])
  }


}
