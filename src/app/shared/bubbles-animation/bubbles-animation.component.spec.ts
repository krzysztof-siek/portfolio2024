import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesAnimationComponent } from './bubbles-animation.component';

describe('BubblesAnimationComponent', () => {
  let component: BubblesAnimationComponent;
  let fixture: ComponentFixture<BubblesAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubblesAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubblesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
