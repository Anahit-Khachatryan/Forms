import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDrivenComponent } from './sign-in-driven.component';

describe('SignInDrivenComponent', () => {
  let component: SignInDrivenComponent;
  let fixture: ComponentFixture<SignInDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
