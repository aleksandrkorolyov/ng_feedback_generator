import { createAction, props } from '@ngrx/store';

export const updateTextColor = createAction(
  '[Settings] Update Text Color',
  props<{ textColor: string }>()
);

export const updateBgColor = createAction(
  '[Settings] Update Background Color',
  props<{ bgColor: string }>()
);