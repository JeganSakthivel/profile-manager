import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul class="navbar-nav mr-auto">
    
      <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngFor= "let item of navObjects">
        <a class="nav-link" routerLink="{{ item.link }}">{{ item.name }} </a>
      </li>

   </ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {
  
  navObjects : Object[];

  constructor() { 

    this.navObjects = [
      {name:'ProfileHighlights', link : '/profileHighlights'},
      {name:'Projects', link : '/projectDetails'},
      {name:'Experience', link : '/experience'},
      {name:'Personal Biography', link : '/personalBio'},
      {name:'Contact Me', link : '/contactMe'},

    ]
  }

  ngOnInit() {
  }

}
