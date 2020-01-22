import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ThirdChildComponent } from './third-child/third-child.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationBarComponent,
      FooterComponent,
      MainBodyComponent,
      FirstChildComponent,
      SecondChildComponent,
      ThirdChildComponent,
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
