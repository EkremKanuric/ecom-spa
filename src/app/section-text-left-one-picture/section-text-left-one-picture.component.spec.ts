import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTextLeftOnePictureComponent } from './section-text-left-one-picture.component';

describe('SectionTextLeftOnePictureComponent', () => {
  let component: SectionTextLeftOnePictureComponent;
  let fixture: ComponentFixture<SectionTextLeftOnePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTextLeftOnePictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTextLeftOnePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
