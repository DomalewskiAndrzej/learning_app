import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnedStuffFeatureComponent } from './learned-stuff-feature/learned-stuff-feature.component';
import { LearnedStuffFeatureRoutingModule } from './learned-stuff-feature-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { LearnedStuffUiModule } from '@app/app/learning-stuff/learned-stuff/ui';
import { LearningStuffSharedServicesModule } from '@app/app/learning-stuff/shared/services';
import { CustomTemplateRefDirective } from './directives/custom-template-ref.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LabelNamePipe } from './pipes/label-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    LearnedStuffFeatureRoutingModule,
    MatTabsModule,
    LearnedStuffUiModule,
    LearningStuffSharedServicesModule,
    MatFormFieldModule,
  ],
  declarations: [LearnedStuffFeatureComponent, CustomTemplateRefDirective, LabelNamePipe],
})
export class LearnedStuffFeatureModule {}
