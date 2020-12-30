import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
 
  ],
  exports:[
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
