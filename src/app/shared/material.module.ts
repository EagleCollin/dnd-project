import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
