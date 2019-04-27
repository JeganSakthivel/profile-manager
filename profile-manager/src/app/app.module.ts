import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ProfileHighlightsComponent } from './profile-highlights/profile-highlights.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PersonalBioComponent } from './personal-bio/personal-bio.component';
import { ExperienceComponent } from './experience/experience.component';

const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit

  { path: 'profileHighlights', component: ProfileHighlightsComponent },
  { path: 'projectDetails', component: ProjectDetailsComponent },
  { path: 'personalBio', component: PersonalBioComponent },
  { path: 'experience', component: ExperienceComponent },
  
 
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ProfileHighlightsComponent,
    ProjectDetailsComponent,
    PersonalBioComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
