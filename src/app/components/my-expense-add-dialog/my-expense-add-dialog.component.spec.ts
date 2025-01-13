import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExpenseAddDialogComponent } from './my-expense-add-dialog.component';

describe('MyExpenseAddDialogComponent', () => {
  let component: MyExpenseAddDialogComponent;
  let fixture: ComponentFixture<MyExpenseAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExpenseAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyExpenseAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
