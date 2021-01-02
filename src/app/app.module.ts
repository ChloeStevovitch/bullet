import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ShelfComponent } from './shelf/shelf.component';
import { ColorTrackerComponent } from './color-tracker/color-tracker.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ShelfComponent,
    ColorTrackerComponent
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
