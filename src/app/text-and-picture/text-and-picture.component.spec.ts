import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndPictureComponent } from './text-and-picture.component';

describe('TextAndPictureComponent', () => {
  let component: TextAndPictureComponent;
  let fixture: ComponentFixture<TextAndPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAndPictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAndPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
