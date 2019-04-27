import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-bio',
  templateUrl: './personal-bio.component.html',
  styleUrls: ['./personal-bio.component.css']
})
export class PersonalBioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personalBioObj : Object= {};
  personalBiolist : Object [] = [
    {
      title : 'Name',
      desc : 'Jegan' 
    },
    {
      title : 'EmployeeId',
      desc : '1356' 
    },
    {
      title : 'EmailId',
      desc : 'ac@cts.com' 
    },
    {
      title : 'Experience',
      desc : '6+'
    }
  ];
  
 
  newPersonalBioFormHandler(){
    console.log(this.personalBioObj);
    this.personalBiolist.push(this.personalBioObj);
    this.personalBioObj = {};
  }

  DeleteHandler(index){
    console.log("delete handl");
    console.log(index);
    this.personalBiolist.splice(index,1);
  }
}
