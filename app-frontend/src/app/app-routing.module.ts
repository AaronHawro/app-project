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
import { AuthGuard } from './services/authGuard.service';
import { TeamListComponent } from './team/team-list/team-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { ProjectListComponent } from './project/project-list/project-list.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'},
  {path: 'login', component: LoginPageComponent, runGuardsAndResolvers: 'always'},
  {path: 'sign-up', component: UserAddComponent},
  {path: 'user-view', component: UserViewComponent, runGuardsAndResolvers: 'always'},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-edit', component: UserEditComponent},
  {path: 'team-list', component: TeamListComponent, runGuardsAndResolvers: 'always'},
  {path: 'team-view/:id', component: TeamViewComponent, runGuardsAndResolvers: 'always'},
  {path: 'team-edit/:id', component: TeamEditComponent},
  {path: 'team-add', component: TeamAddComponent},
  {path: 'task-view/:id', component: TaskViewComponent, runGuardsAndResolvers: 'always'},
  {path: 'task-edit/:id', component: TaskEditComponent},
  {path: 'task-add/:id', component: TaskAddComponent},
  {path: 'project-list', component: ProjectListComponent, runGuardsAndResolvers: 'always'},
  {path: 'project-view/:id', component: ProjectViewComponent, runGuardsAndResolvers: 'always'},
  {path: 'project-edit/:id', component: ProjectEditComponent},
  {path: 'project-add', component: ProjectAddComponent},
  {path: 'comment-list', component: CommentListComponent, runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
