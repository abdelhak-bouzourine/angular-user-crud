import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserHeaderComponent } from './add-user-header.component';

describe('AddUserHeaderComponent', () => {
  let component: AddUserHeaderComponent;
  let fixture: ComponentFixture<AddUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
