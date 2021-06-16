import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent, DialogComponent } from '../app/list/list.component';
import { CreateComponent } from '../app/create/create.component';
import { CommonModule } from '@angular/common';
import { ModifyComponent } from './modify/modify.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './error/notfound.component';
import { HelpCreateComponent } from './help-create/help-create.component';
import { HelpModifyComponent } from './help-modify/help-modify.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent, ListComponent, CreateComponent, ModifyComponent, HelpComponent, NotFoundComponent,
    HelpCreateComponent, HelpModifyComponent, DialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSliderModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ]

})
export class AppModule { }
