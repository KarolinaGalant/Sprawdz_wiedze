import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OnlineComponent } from './online/online.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { AddtestComponent } from './addtest/addtest.component';
import { AddClassComponent } from './add-class/add-class.component';
import { QuestionComponent } from './question/question.component';
import { ConfigService } from './config.service';
import { ProfilComponent } from './profil/profil.component';
import { DiaryComponent } from './diary/diary.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { TestsDoneComponent } from './tests-done/tests-done.component';
import { CheckTestComponent } from './check-test/check-test.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectAdminComponent } from './subject-admin/subject-admin.component';
import { NewTestComponent } from './new-test/new-test.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    OnlineComponent,
    RegisterComponent,
    TestComponent,
    ContentComponent,
    AddtestComponent,
    AddClassComponent,
    QuestionComponent,
    ProfilComponent,
    DiaryComponent,
    ClassesListComponent,
    TestsDoneComponent,
    CheckTestComponent,
    SubjectComponent,
    SubjectAdminComponent,
    NewTestComponent,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [DataService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
