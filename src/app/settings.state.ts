import { ActionReducerMap } from '@ngrx/store';
import { settingsReducer, SettingsState } from './settings.reducer';

export interface AppState {
  settings: SettingsState;
}

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer
};