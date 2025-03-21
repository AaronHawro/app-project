import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { TeamAddComponent } from './team/team-add/team-add.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamViewComponent } from './team/team-view/team-view.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    UserAddComponent,
    UserViewComponent,
    UserEditComponent,
    TeamListComponent,
    TeamViewComponent,
    TeamEditComponent,
    TeamAddComponent,
    TaskViewComponent,
    TaskEditComponent,
    TaskAddComponent,
    ProjectViewComponent,
    ProjectEditComponent,
    ProjectAddComponent,
    TeamListComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
