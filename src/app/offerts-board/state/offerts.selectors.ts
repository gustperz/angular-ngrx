import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  FEATURE_KEY,
  offertsAdapter,
  OffertsPartialState,
  State,
} from './offerts.reducer';

export const getOffertsState = createFeatureSelector<
  OffertsPartialState,
  State
>(FEATURE_KEY);

const { selectAll, selectEntities } = offertsAdapter.getSelectors();

export const getOfferts = createSelector(getOffertsState, (state: State) =>
  selectAll(state)
);

export const getOffert = createSelector(getOffertsState, (state: State) => {
  return selectEntities[state.selectedId];
});
