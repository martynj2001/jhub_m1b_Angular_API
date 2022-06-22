import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSelectStartComponent } from './data-select-start.component';

describe('DataSelectStartComponent', () => {
  let component: DataSelectStartComponent;
  let fixture: ComponentFixture<DataSelectStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSelectStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSelectStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
