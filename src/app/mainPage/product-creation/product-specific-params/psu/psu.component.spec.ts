import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSUComponent } from './psu.component';

describe('PSUComponent', () => {
  let component: PSUComponent;
  let fixture: ComponentFixture<PSUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
