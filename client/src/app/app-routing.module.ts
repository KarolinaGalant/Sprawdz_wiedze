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
import { CheckTestComponent } from './check-test/check-test.component';
import { TestsDoneComponent } from './tests-done/tests-done.component';
import { ContentComponent } from './content/content.component';
import { AdminGuard } from './admin.guard';
import { SubjectComponent } from './subject/subject.component';
import { SubjectAdminComponent } from './subject-admin/subject-admin.component';
import { StudentGuard } from './student.guard';
import { NewTestComponent } from './new-test/new-test.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'online', component: OnlineComponent, canActivate: [DataGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'changepassword', component: ChangepasswordComponent, canActivate: [DataGuard] },
  { path: 'test/:idTest', component: TestComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'addtest', component: AddtestComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'addclass', component: AddClassComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'diary', component: DiaryComponent, canActivate: [DataGuard, StudentGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [DataGuard] },
  { path: 'classeslist', component: ClassesListComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'checktest/:idTest', component: CheckTestComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'testdone', component: TestsDoneComponent, canActivate: [DataGuard, StudentGuard] },
  { path: 'content', component: ContentComponent, canActivate: [DataGuard, StudentGuard] },
  { path: 'subject/:name', component: SubjectComponent, canActivate: [DataGuard, StudentGuard] },
  { path: 'subjectadmin/:name', component: SubjectAdminComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'question', component: QuestionComponent, canActivate: [DataGuard, AdminGuard] },
  { path: 'newTest', component: NewTestComponent, canActivate: [DataGuard, AdminGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
