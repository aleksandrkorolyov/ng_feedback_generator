import { createReducer, on } from '@ngrx/store';
import {updateTextColor, updateBgColor} from './settings.actions';

export interface SettingsState {
  textColor: string;
  bgColor: string;
}

export const initialState: SettingsState = {
  textColor: '#000000',
  bgColor: '#ffffff'
};

export const settingsReducer = createReducer(
  initialState,
  on(updateTextColor, (state, { textColor }) => ({ ...state, textColor })),
  on(updateBgColor, (state, { bgColor }) => ({ ...state, bgColor }))
);