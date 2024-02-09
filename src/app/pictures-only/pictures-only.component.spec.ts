import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesOnlyComponent } from './pictures-only.component';

describe('PicturesOnlyComponent', () => {
  let component: PicturesOnlyComponent;
  let fixture: ComponentFixture<PicturesOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicturesOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicturesOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
