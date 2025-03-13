import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { TeamViewComponent } from './team/team-view/team-view.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamAddComponent } from './team/team-add/team-add.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-up', component: UserAddComponent},
  {path: 'user-view', component: UserViewComponent},
  {path: 'user-edit', component: UserEditComponent},
  {path: 'team-view', component: TeamViewComponent},
  {path: 'team-edit', component: TeamEditComponent},
  {path: 'team-add', component: TeamAddComponent},
  {path: 'task-view', component: TaskViewComponent},
  {path: 'task-edit', component: TaskEditComponent},
  {path: 'task-add', component: TaskAddComponent},
  {path: 'project-view', component: ProjectViewComponent},
  {path: 'project-edit', component: ProjectEditComponent},
  {path: 'project-add', component: ProjectAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
