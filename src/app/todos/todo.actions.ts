import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create item',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle ToDo state',
  props<{ id: number }>()
);

export const removeCompleted = createAction('[TODO] Remove completed items');

export const edit = createAction(
  '[TODO] Edit ToDo item',
  props<{ id: number; text: string }>()
);

export const remove = createAction(
  '[TODO] Remove item',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Checked all item',
  props<{ completed: boolean }>()
);
