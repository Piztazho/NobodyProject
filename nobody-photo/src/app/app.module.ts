import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './services/data.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { InfoScreenComponent } from './info-screen/info-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomeComponent,
    ProjectDetailComponent,
    InfoScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
