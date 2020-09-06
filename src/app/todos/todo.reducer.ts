import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { ToDo } from './models/todo.model';

export const initialState: ToDo[] = [
  new ToDo('Save the World!'),
  new ToDo('Win Thanos'),
  new ToDo('Buy Ironman costume'),
  new ToDo(`Steal Captain's Shield`),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new ToDo(text)]),

  on(actions.remove, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(actions.removeCompleted, (state) =>
    state.filter((todo) => !todo.completed)
  ),

  on(actions.toggleAll, (state, { completed }) =>
    state.map((todo) => {
      return { ...todo, completed: completed };
    })
  ),

  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
