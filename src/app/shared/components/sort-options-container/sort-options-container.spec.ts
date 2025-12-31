import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOptionsContainer } from './sort-options-container';

describe('SortOptionsContainer', () => {
  let component: SortOptionsContainer;
  let fixture: ComponentFixture<SortOptionsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortOptionsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortOptionsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
