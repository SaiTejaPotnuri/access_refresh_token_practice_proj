import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareatagComponent } from './textareatag.component';

describe('TextareatagComponent', () => {
  let component: TextareatagComponent;
  let fixture: ComponentFixture<TextareatagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareatagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareatagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
