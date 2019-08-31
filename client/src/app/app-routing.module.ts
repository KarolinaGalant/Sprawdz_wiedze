import { DataGuard } from './guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { OnlineComponent } from './online/online.component';
import { AddtestComponent } from './addtest/addtest.component';
import { AddClassComponent } from './add-class/add-class.component';
import { QuestionComponent } from './question/question.component';
import { DiaryComponent } from './diary/diary.component';
import { ProfilComponent } from './profil/profil.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CheckTestComponent } from './check-test/check-test.component';
import { TestsDoneComponent } from './tests-done/tests-done.component';
import { ContentComponent } from './content/content.component';
import { AdminGuard } from './admin.guard';
import { SubjectComponent } from './subject/subject.component';
import { SubjectAdminComponent } from './subject-admin/subject-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'online', component: OnlineComponent, canActivate: [DataGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent, canActivate: [DataGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'addtest', component: AddtestComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'addclass', component: AddClassComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'diary', component: DiaryComponent, canActivate: [DataGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [DataGuard] },
  { path: 'classeslist', component: ClassesListComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'peoplelist', component: PeopleListComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'checktest', component: CheckTestComponent, canActivate: [DataGuard,AdminGuard] },
  { path: 'testdone', component: TestsDoneComponent, canActivate: [DataGuard] },
  { path: 'content', component: ContentComponent, canActivate: [DataGuard] },
  { path: 'subject/:name', component: SubjectComponent, canActivate: [DataGuard] },
  { path: 'subjectadmin/:name', component: SubjectAdminComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'question', component: QuestionComponent, canActivate: [DataGuard, AdminGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
