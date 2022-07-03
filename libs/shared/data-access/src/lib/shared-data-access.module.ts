import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RoutingEffects } from './routing/+state/routing.effects';
import { RoutingFacade } from './routing/+state/routing.facade';
import { StoreModule } from '@ngrx/store';
import { routingFeatureKey } from './routing/+state/routing.store-key';
import {
  DefaultRouterStateSerializer,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RoutingEffects]),
    StoreModule.forFeature(routingFeatureKey, routerReducer),
    StoreRouterConnectingModule.forRoot({
      serializer: DefaultRouterStateSerializer,
    }),
  ],
  providers: [RoutingFacade],
})
export class SharedDataAccessModule {}
