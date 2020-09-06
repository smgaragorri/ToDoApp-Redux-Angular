import { ToDo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { variousFilters } from './filter/filter.action';

export interface AppState {
  todos: ToDo[];
  filter: variousFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
