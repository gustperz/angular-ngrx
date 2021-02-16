import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as Actions from './offerts.actions';
import { Offer } from '../types';

export const FEATURE_KEY = 'offerts';

export interface State extends EntityState<Offer> {
  selectedId?: string;
}

export interface OffertsPartialState {
  readonly [FEATURE_KEY]: State;
}

export const offertsAdapter = createEntityAdapter<Offer>();

export const initialState: State = offertsAdapter.getInitialState({
  selectedId: undefined,
});

const offertsReducer = createReducer(
  initialState,
  on(Actions.loaddSuccess, (state, { offerts }) => {
    return offertsAdapter.setAll(offerts, state);
  }),
  on(Actions.setCurrentOffer, (state, { offerId }) => {
    state.selectedId = offerId;
    return state;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return offertsReducer(state, action);
}
