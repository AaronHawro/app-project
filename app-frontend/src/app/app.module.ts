import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { TeamViewComponent } from './team/team-view/team-view.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    MainPageComponent,
    ProjectEditComponent,
    ProjectViewComponent,
    TaskViewComponent,
    TaskEditComponent,
    TeamViewComponent,
    TeamEditComponent,
    UserViewComponent,
    UserEditComponent,
    AppComponent // działa normalnie
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
