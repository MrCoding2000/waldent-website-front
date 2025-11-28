import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSellers } from './other-sellers';

describe('OtherSellers', () => {
  let component: OtherSellers;
  let fixture: ComponentFixture<OtherSellers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherSellers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSellers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

