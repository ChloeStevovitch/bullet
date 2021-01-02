import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorTrackerComponent } from './color-tracker/color-tracker.component';
import { AboutComponent } from './about/about.component';
import { ColorTrackerContainerComponent } from './color-tracker-container/color-tracker-container.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorTrackerComponent,
    AboutComponent,
    ColorTrackerContainerComponent
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
