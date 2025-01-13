import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExpenseDetailsComponent } from './my-expense-details.component';

describe('MyExpenseDetailsComponent', () => {
  let component: MyExpenseDetailsComponent;
  let fixture: ComponentFixture<MyExpenseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExpenseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyExpenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
