import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationInfoComponent } from './qualification-info.component';

describe('QualificationInfoComponent', () => {
  let component: QualificationInfoComponent;
  let fixture: ComponentFixture<QualificationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
