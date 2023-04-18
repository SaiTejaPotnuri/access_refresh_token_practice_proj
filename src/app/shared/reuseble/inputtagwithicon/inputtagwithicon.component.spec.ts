import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtagwithiconComponent } from './inputtagwithicon.component';

describe('InputtagwithiconComponent', () => {
  let component: InputtagwithiconComponent;
  let fixture: ComponentFixture<InputtagwithiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputtagwithiconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputtagwithiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
