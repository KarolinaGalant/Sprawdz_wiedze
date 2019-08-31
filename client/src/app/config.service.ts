import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AddClassResultModel } from './add-class/addClassResultModel';
import { AddTestResultModel } from './addtest/addTestResultModel';
import { LoginResultModel } from './login/loginResultModel';
import { EmailValidator } from '@angular/forms';
import { RegisterResultModel } from './register/registerResultModel';
import { ClassesListResultModel } from './classes-list/classes-listResultModel';
import { AllClassesResultModel } from './diary/AllClassesResultModel';
import { GetTestResultModel } from './test/getTestResultModel';
import { ContentResultModel } from './content/contentResultModel';
import { TestListResultModel } from './content/testListResultModel';
import { StudentResultModel } from './subject-admin/studentResultModel';
import { AddTestQuestionResultModel } from './addtest/addTestQuestionResultModel';
import { TestDoneResultModel } from './tests-done/testDoneResultModel';
import { AnswerResultModel } from './tests-done/answerResultModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('http://localhost:3000/api/user/login', {
      login,
      password,
    }, httpOptions);
  }

  addClass(nameS: string, description: string, login: string): Observable<AddClassResultModel> {
    return this.http.post<AddClassResultModel>('http://localhost:3000/api/user/addGroup', {
      login,
      description,
      nameS,
    }, httpOptions);
  }

  // tslint:disable-next-line:max-line-length
  addTest(question: string, answerA: string, answerB: string, answerC: string, answerD: string, correctAnswer: string): Observable<AddTestQuestionResultModel> {
    return this.http.post<AddTestQuestionResultModel>('http://localhost:3000/api/user/addTest', {
      question,
      answerA,
      answerB,
      answerC,
      answerD,
      correctAnswer,
      // attachment,
    });
  }


  registration(name: string, surname: string, mail: string, login: string, password: string): Observable<RegisterResultModel> {
    return this.http.post<RegisterResultModel>('http://localhost:3000/api/user/register', {
      name,
      surname,
      mail,
      login,
      password,
    }, httpOptions);
  }

  getUser(login: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('http://localhost:3000/api/user/getUser', {
      login,
      password
    });
  }
  getIdUser(login: string, password: string, iduser: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('http://localhost:3000/api/user/getUser', {
      login,
      password,
      iduser,
    });
  }

  getClasses(login: string): Observable<ClassesListResultModel> {
    return this.http.post<ClassesListResultModel>('http://localhost:3000/api/user/classeslist', {
      login,
    });
  }

  getAllClasses(nameS: string, description: string): Observable<AllClassesResultModel> {
    return this.http.post<AllClassesResultModel>('http://localhost:3000/api/user/allclasseslist', {
      nameS,
      description,
    });
  }

  getTest(question: string, answer1: string, answer2: string, answer3: string, answer4: string, correctAnswer: string, attachment: string): Observable<GetTestResultModel> {
    return this.http.post<GetTestResultModel>('http://localhost:3000/api/user/getTest', {
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      correctAnswer,
      attachment,
    });
  }
  getDoneTest(idQuestion: string, question: string, answer1: string, answer2: string, answer3: string, answer4: string): Observable<TestDoneResultModel> {
    return this.http.post<TestDoneResultModel>('http://localhost:3000/api/user/getDoneTest', {
      idQuestion,
      question,
      answer1,
      answer2,
      answer3,
      answer4,
    });
  }
  getRating(nameS: string, rating: string): Observable<ContentResultModel> {
    return this.http.post<ContentResultModel>('http://localhost:3000/api/user/getRating', {
      nameS,
      rating,
    });
  }

  getTestList(idTest: string, idsubject: string): Observable<TestListResultModel> {
    return this.http.post<TestListResultModel>('http://localhost:3000/api/user/getTestList', {
      idTest,
      idsubject
    });
  }
  getSubject(subject: string): Observable<ClassesListResultModel> {
    return this.http.post<ClassesListResultModel>('http://localhost:3000/api/user/getSubject', {
      subject,
    });
  }

  getSubjectStudent(student: string): Observable<StudentResultModel> {
    return this.http.post<StudentResultModel>('http://localhost:3000/api/user/getSubjectStudent', {
      student,
    });
  }
  getMyClass(login: string): Observable<ClassesListResultModel> {
    return this.http.post<ClassesListResultModel>('http://localhost:3000/api/user/getMyClass', {
      login,
    });
  }
  addTestName(testName: string): Observable<AddTestResultModel> {
    return this.http.post<AddTestResultModel>('http://localhost:3000/api/user/addTestName', {
      testName,
    });
  }
  getTestName(testName: string): Observable<AddTestResultModel> {
    return this.http.post<AddTestResultModel>('http://localhost:3000/api/user/getTestName', {
      testName,
    });
  }
  addAnswer(answer: string, idQuestion: string): Observable<AnswerResultModel> {
    return this.http.post<AnswerResultModel>('http://localhost:3000/api/user/addAnswer', {
      answer,
      idQuestion,
    });
  }

}
