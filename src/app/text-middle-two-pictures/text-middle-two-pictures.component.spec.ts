import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMiddleTwoPicturesComponent } from './text-middle-two-pictures.component';

describe('TextMiddleTwoPicturesComponent', () => {
  let component: TextMiddleTwoPicturesComponent;
  let fixture: ComponentFixture<TextMiddleTwoPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextMiddleTwoPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextMiddleTwoPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
