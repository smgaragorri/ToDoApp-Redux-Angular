import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/todo.model';
import { variousFilters } from '../filter/filter.action';

@Pipe({
  name: 'toDoFilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(todos: ToDo[], filter: variousFilters): ToDo[] {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'pending':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
}
