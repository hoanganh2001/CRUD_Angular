import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { DialogModule } from '@angular/cdk/dialog';
import { HomeModule } from './home/home/home.module';
import { HomeComponent } from './home/home/home.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog/dialogContent/dialogContent.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [	
    AppComponent,
      ProductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent, HomeComponent, DialogComponent, DialogContentComponent],
})
export class AppModule { }
