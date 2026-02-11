import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMenu } from './secondary-menu';

describe('SecondaryMenu', () => {
  let component: SecondaryMenu;
  let fixture: ComponentFixture<SecondaryMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
