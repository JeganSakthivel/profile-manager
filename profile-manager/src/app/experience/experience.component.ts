import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  experienceObj : Object= {};
  experienceList : Object [] = [
    {
      
      desc : 'Paytm (2016 - 2018) Java Devloper  Developing and enhancing application'

    },
    {
     
      desc : 'NY (2018) Senior Devloper  Designs and business solutions for new applications'
    },
    
  ];
  
 
  newExperienceFormHandler(){
    console.log(this.experienceObj);
    this.experienceList.push(this.experienceObj);
    this.experienceObj = {};
  }

  DeleteHandler(index){
    console.log("delete handl");
    console.log(index);
    this.experienceList.splice(index,1);
  }

}
