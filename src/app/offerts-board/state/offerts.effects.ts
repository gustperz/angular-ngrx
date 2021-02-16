import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DataApiService } from '../services/data-api.service';
import * as OffertsActions from './offerts.actions';

@Injectable()
export class OffertsEffects {
  savePurchase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OffertsActions.load),
      mergeMap(() =>
        this.service.getOfferts().pipe(
          map((offerts) => OffertsActions.loaddSuccess({ offerts })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: DataApiService) {}
}
