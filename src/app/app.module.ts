import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { CompInterComponent } from './comp-inter/comp-inter.component';
import { LabWorkComponent } from './lab-work/lab-work.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    CompInterComponent,
    LabWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
