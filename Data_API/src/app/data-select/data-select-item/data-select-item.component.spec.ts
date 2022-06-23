import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSelectItemComponent } from './data-select-item.component';

describe('DataSelectItemComponent', () => {
  let component: DataSelectItemComponent;
  let fixture: ComponentFixture<DataSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSelectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
