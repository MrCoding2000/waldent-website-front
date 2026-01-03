import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBox } from './property-box';

describe('PropertyBox', () => {
  let component: PropertyBox;
  let fixture: ComponentFixture<PropertyBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
