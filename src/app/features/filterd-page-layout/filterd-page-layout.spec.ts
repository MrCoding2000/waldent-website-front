import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdPageLayout } from './filterd-page-layout';

describe('FilterdPageLayout', () => {
  let component: FilterdPageLayout;
  let fixture: ComponentFixture<FilterdPageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterdPageLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterdPageLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
