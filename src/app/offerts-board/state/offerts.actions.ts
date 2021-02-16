import { createAction, props } from '@ngrx/store';

import { Offer } from '../types';

export const load = createAction('[Offerts/API] Load');

export const loaddSuccess = createAction(
  '[Offerts/API] Load Offerts success',
  props<{ offerts: Offer[] }>()
);

export const setCurrentOffer = createAction(
  '[Offerts] Select Offer',
  props<{ offerId: string }>()
);
