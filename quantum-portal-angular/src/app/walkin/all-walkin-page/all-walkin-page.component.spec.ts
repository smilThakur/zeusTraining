import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWalkinPageComponent } from './all-walkin-page.component';

describe('AllWalkinPageComponent', () => {
  let component: AllWalkinPageComponent;
  let fixture: ComponentFixture<AllWalkinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWalkinPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWalkinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
