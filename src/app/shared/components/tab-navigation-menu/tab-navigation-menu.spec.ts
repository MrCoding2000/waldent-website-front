import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavigationMenu } from './tab-navigation-menu';

describe('TabNavigationMenu', () => {
  let component: TabNavigationMenu;
  let fixture: ComponentFixture<TabNavigationMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNavigationMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNavigationMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
