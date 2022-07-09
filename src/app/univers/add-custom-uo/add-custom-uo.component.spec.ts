import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomUoComponent } from './add-custom-uo.component';

describe('AddCustomUoComponent', () => {
  let component: AddCustomUoComponent;
  let fixture: ComponentFixture<AddCustomUoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomUoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomUoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
