import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectChartsComponent } from './connect-charts.component';

describe('ConnectChartsComponent', () => {
  let component: ConnectChartsComponent;
  let fixture: ComponentFixture<ConnectChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
