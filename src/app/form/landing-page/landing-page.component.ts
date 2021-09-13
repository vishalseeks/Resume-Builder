import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  formSelector: string ;

  constructor() { 
    this.formSelector = '';
  }

  ngOnInit(): void {
  }
  getExperienceLevel(data:string){
    this.formSelector = data;
    

  }

}
