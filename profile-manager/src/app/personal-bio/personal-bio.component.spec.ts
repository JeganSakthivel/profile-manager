import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBioComponent } from './personal-bio.component';

describe('PersonalBioComponent', () => {
  let component: PersonalBioComponent;
  let fixture: ComponentFixture<PersonalBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
