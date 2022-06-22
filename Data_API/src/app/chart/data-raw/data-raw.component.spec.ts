import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRawComponent } from './data-raw.component';

describe('DataRawComponent', () => {
  let component: DataRawComponent;
  let fixture: ComponentFixture<DataRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
