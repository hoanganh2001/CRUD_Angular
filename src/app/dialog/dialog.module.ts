import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  ReactiveFormsModule } from '@angular/forms';


import { DialogComponent } from './dialog.component';
import { DialogContentComponent } from './dialogContent/dialogContent.component';
import { HomeComponent } from '../home/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [DialogComponent, DialogContentComponent],
  providers:[HomeComponent]
})
export class DialogModule { }
