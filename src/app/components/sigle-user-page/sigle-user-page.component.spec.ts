import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleUserPageComponent } from './sigle-user-page.component';

describe('SigleUserPageComponent', () => {
  let component: SigleUserPageComponent;
  let fixture: ComponentFixture<SigleUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigleUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
