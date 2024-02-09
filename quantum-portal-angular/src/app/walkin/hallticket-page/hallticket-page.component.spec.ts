import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallticketPageComponent } from './hallticket-page.component';

describe('HallticketPageComponent', () => {
  let component: HallticketPageComponent;
  let fixture: ComponentFixture<HallticketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallticketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallticketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
