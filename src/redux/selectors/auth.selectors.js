import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectAuthModalHidden = createSelector(
  [selectAuth],
  auth => auth.authModalHidden
);
