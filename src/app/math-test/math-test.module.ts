// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MathTestComponent }       from './math-test.component';
import { MathsService }       from './maths.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MathTestComponent
  ],
  providers: [
    MathsService
  ],
  exports: [MathTestComponent],
  bootstrap: []
})
export class MathTestModule { }