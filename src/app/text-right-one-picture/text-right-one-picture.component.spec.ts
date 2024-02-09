import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRightOnePictureComponent } from './text-right-one-picture.component';

describe('TextRightOnePictureComponent', () => {
  let component: TextRightOnePictureComponent;
  let fixture: ComponentFixture<TextRightOnePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRightOnePictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextRightOnePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
