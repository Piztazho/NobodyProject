import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SectionComponent } from './section/section.component';
import { InfoScreenComponent } from './info-screen/info-screen.component';

import { DataService } from './services/data.service';
import { LoaderComponent } from './loader/loader.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectDetailComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'section', component: SectionComponent },
  { path: 'section/:section', component: SectionComponent },
  { path: 'bio', component: InfoScreenComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomeComponent,
    ProjectDetailComponent,
    SectionComponent,
    InfoScreenComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
