import { createAction, props } from '@ngrx/store';

export type variousFilters = 'completed' | 'pending' | 'all';

export const setFilter = createAction(
  '[FILTER] Set filter',

  props<{ filter: variousFilters }>()
);
