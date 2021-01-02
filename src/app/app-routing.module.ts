import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ColorTrackerContainerComponent } from './color-tracker-container/color-tracker-container.component';


const routes: Routes = [
  { path: '',  component: AppComponent,
    children: [
      { path: '', component: ColorTrackerContainerComponent },
      { path: 'about', component: AboutComponent },
     
    ] 
  },
  { path: '**', redirectTo: ''  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
