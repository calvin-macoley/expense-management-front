import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Expense} from "../../models/expense";
import {SharedModule} from "../../shared/shared.module";
import {Router, Routes} from "@angular/router";
import {MyExpenseAddDialogComponent} from "../my-expense-add-dialog/my-expense-add-dialog.component";

const ELEMENT_DATA: Expense[] = [
  {
    id: 1,
    description: 'Lorem ipsum',
    amount: 30.5
  }
];

@Component({
  selector: 'app-my-expenses',
  standalone: true,
  imports: [SharedModule, MatTableModule],
  templateUrl: './my-expenses.component.html',
  styleUrl: './my-expenses.component.css'
})
export class MyExpensesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'amount', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private readonly router: Router) {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

  onAdd() {

  }

  onEdit(id: number) {
    this.router.navigate(['/my-expense', id, 'details']);
  }

  onDelete(id: number) {
    console.log('Je supprime ' + id);
  }
}
