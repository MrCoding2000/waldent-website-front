import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCommentsPointsBox } from './small-comments-points-box';

describe('SmallCommentsPointsBox', () => {
  let component: SmallCommentsPointsBox;
  let fixture: ComponentFixture<SmallCommentsPointsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCommentsPointsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCommentsPointsBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
