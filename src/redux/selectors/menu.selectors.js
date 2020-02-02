import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectSections = createSelector(
  [selectMenu],
  menu => menu.sections
);

export const selectMenuLoading = createSelector(
  [selectMenu],
  menu => menu.sections.length <= 0
);

export const selectMenuError = createSelector([selectMenu], menu => menu.error);
