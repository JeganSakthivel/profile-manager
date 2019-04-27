import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profileObj : Object= {};
  profilelist : Object [] = [
    {
      title : 'Role',
      desc : 'Associate' 
    },
    {
      title : 'Technologies',
      desc : 'Java' 
    },
    {
      title : 'Tools',
      desc : 'Crystal Report' 
    }
  ];
  
 
  newProfileFormHandler(){
    console.log(this.profileObj);
    this.profilelist.push(this.profileObj);
    this.profileObj = {};
  }

  DeleteHandler(index){
    console.log("delete handl");
    console.log(index);
    this.profilelist.splice(index,1);
  }
}
