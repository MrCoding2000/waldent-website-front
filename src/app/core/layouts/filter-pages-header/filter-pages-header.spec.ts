import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPagesHeader } from './filter-pages-header';

describe('FilterPagesHeader', () => {
  let component: FilterPagesHeader;
  let fixture: ComponentFixture<FilterPagesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPagesHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPagesHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
