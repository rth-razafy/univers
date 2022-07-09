import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUniversComponent } from './home-univers.component';

describe('HomeUniversComponent', () => {
  let component: HomeUniversComponent;
  let fixture: ComponentFixture<HomeUniversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUniversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
