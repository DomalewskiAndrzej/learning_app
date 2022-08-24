import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './+state/to-do.effects';
import { ToDoService } from './services/to-do.service';
import { StoreModule } from '@ngrx/store';
import {
  initialState as ToDoInitialState,
  todoFeatureKey,
  TodoReducer,
} from './+state/to-do.reducer';
import { TodoFacade } from './+state/to-do.facade';
import { HttpClientModule } from '@angular/common/http';
import { SharedDomainModule } from '@app/shared/domain';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedDomainModule,
    EffectsModule.forFeature([TodoEffects]),
    StoreModule.forFeature(todoFeatureKey, TodoReducer, {
      initialState: ToDoInitialState,
    }),
  ],
  providers: [ToDoService, TodoFacade],
})
export class ToDoDataAccessModule {}
