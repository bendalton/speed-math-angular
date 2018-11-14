import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MathTestModule } from './math-test/math-test.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MathTestModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
