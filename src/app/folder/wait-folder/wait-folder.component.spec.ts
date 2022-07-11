import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitFolderComponent } from './wait-folder.component';

describe('WaitFolderComponent', () => {
  let component: WaitFolderComponent;
  let fixture: ComponentFixture<WaitFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
