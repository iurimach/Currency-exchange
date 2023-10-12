import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
