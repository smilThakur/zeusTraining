import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinDetailPageComponent } from './walkin-detail-page.component';

describe('WalkinDetailPageComponent', () => {
  let component: WalkinDetailPageComponent;
  let fixture: ComponentFixture<WalkinDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkinDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
