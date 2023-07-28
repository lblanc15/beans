import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPillComponent } from './navigation-pill.component';

describe('NavigationPillComponent', () => {
  let component: NavigationPillComponent;
  let fixture: ComponentFixture<NavigationPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationPillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
