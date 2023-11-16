import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasetPageComponent } from './baset-page.component';

describe('BasetPageComponent', () => {
  let component: BasetPageComponent;
  let fixture: ComponentFixture<BasetPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasetPageComponent]
    });
    fixture = TestBed.createComponent(BasetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
