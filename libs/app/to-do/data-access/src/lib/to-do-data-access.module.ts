import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './+state/to-do.effects';
import { TodoService } from './services/to-do/to-do.service';
import { StoreModule } from '@ngrx/store';
import {
  initialState as ToDoInitialState,
  todoFeatureKey,
  TodoReducer,
} from './+state/to-do.reducer';
import { TodoFacade } from './+state/to-do.facade';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([TodoEffects]),
    StoreModule.forFeature(todoFeatureKey, TodoReducer, {
      initialState: ToDoInitialState,
    }),
  ],
  providers: [TodoService, TodoFacade],
})
export class ToDoDataAccessModule {}
