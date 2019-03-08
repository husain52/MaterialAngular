import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatMomentDateModule,
    CdkStepperModule
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatMomentDateModule,
    CdkStepperModule
  ],
  declarations: []
})
export class MatLibraryModule { }
