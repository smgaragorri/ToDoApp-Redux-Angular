import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { variousFilters, setFilter } from '../../filter/filter.action';
import { removeCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  initialFilter: variousFilters = 'all';
  filters: variousFilters[] = ['all', 'completed', 'pending'];
  pendings: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.initialFilter = state.filter;
      this.pendings = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: variousFilters) {
    this.store.dispatch(setFilter({ filter: filter }));
  }

  removeCompletedItems() {
    this.store.dispatch(removeCompleted());
  }
}
