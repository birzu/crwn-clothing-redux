import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectAuthModalHidden = createSelector(
  [selectAuth],
  auth => auth.authModalHidden
);

export const selectCurrentForm = createSelector(
  [selectAuth],
  auth => auth.currentForm
);
