import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SettingsState } from './settings.reducer';

export const selectSettingsState = createFeatureSelector<SettingsState>('settings');

export const selectTextColor = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.textColor
);

export const selectBgColor = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.bgColor
);