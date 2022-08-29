import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  exports: [
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
