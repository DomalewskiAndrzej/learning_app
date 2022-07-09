import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RoutingEffects } from './routing/+state/routing.effects';
import { RoutingFacade } from './routing/+state/routing.facade';
import { sharedStoreReducer, storeFeatureKey } from './store/store';
import { StoreModule } from '@ngrx/store';
import { HomeEffects } from './home/+state/home.effects';
import { HomeFacade } from './home/+state/home.facade';
import { NotificationsFacade } from './notifications/+state/notifications.facade';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RoutingEffects, HomeEffects]),
    StoreModule.forFeature(storeFeatureKey, sharedStoreReducer),
  ],
  providers: [RoutingFacade, HomeFacade, NotificationsFacade],
})
export class SharedDataAccessModule {}
