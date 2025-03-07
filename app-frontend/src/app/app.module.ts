import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { TeamViewComponent } from './team/team-view/team-view.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskViewComponent } from './task/task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProjectViewComponent,
    ProjectEditComponent,
    TeamViewComponent,
    TeamEditComponent,
    UserViewComponent,
    UserEditComponent,
    LoginPageComponent,
    TaskEditComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
