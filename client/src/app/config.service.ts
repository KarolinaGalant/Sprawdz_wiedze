import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
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
import { TestRatingResultModel } from './content/testRatingResultModel';
import { SubjectListResultModel } from './classes-list/subjectListResultModel';
import { TestDoneByUserResultModel } from './subject-admin/testDoneByUserResultModel';
import { CheckTestResultModel } from './check-test/checkTestResultModel';
import { ChangePasswordResultModel } from './changepassword/changepasswordResultModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  login( login: string, password: string, role: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('http://localhost:3000/api/user/login', {
      login,
      password,
      role,
    }, httpOptions);
  }

  addClass(nameS: string, description: string, iduser: string): Observable<AddClassResultModel> {
    return this.http.post<AddClassResultModel>('http://localhost:3000/api/user/addGroup', {
      nameS,
      description,
      iduser,
    },);
  }

  addTest(question: string, answerA: string, answerB: string, answerC: string, answerD: string, correctAnswer: string, 
    open: string, idTest: string): Observable<AddTestQuestionResultModel> {
    return this.http.post<AddTestQuestionResultModel>('http://localhost:3000/api/user/addTest', {
      question,
      answerA,
      answerB,
      answerC,
      answerD,
      correctAnswer,
      open,
      idTest,
    });
  }


  registration(name: string, surname: string, mail: string, login: string, password: string, role: string): Observable<RegisterResultModel> {
    return this.http.post<RegisterResultModel>('http://localhost:3000/api/user/register', {
      name,
      surname,
      mail,
      login,
      password,
      role,
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

  getClasses(idsubject: string, nameS: string, description: string, iduser: string): Observable<ClassesListResultModel> {
    return this.http.post<ClassesListResultModel>('http://localhost:3000/api/user/classeslist', {
      idsubject,
      nameS,
      description,
    }, {params: new HttpParams().set('iduser', iduser)});
  }

  // getClasses(login: string, idsubject: string): Observable<SubjectListResultModel> {
  //   return this.http.post<SubjectListResultModel>('http://localhost:3000/api/user/classeslist', {
  //     login,
  //   }, { params: new HttpParams().set('idsubject', idsubject)} );
  // }
  getAllClasses(idsubject: string , nameS: string, description: string): Observable<AllClassesResultModel> {
    return this.http.post<AllClassesResultModel>('http://localhost:3000/api/user/allclasseslist', {
      idsubject,
      nameS,
      description,
    });
  }

  getTest(question: string, answer1: string, answer2: string, answer3: string, answer4: string, correctAnswer: string,open: string,  idTest: string): Observable<GetTestResultModel> {
    return this.http.post<GetTestResultModel>('http://localhost:3000/api/user/getTest', {
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      correctAnswer,
      open,
    } ,{ params: new HttpParams().set('idTest', idTest)}  );
  }
  getTestToCheck(idQuestion: string, question: string, answer1: string, answer2: string, answer3: string,
    answer4: string, correctAnswer: string, answer: string, idTest: string, idUserTest: string): Observable<GetTestResultModel> {
    return this.http.post<GetTestResultModel>('http://localhost:3000/api/user/getTestToCheck', {
      idQuestion,
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      correctAnswer,
      answer,
    }, { params: new HttpParams().set('idTest', idTest).set('idUserTest', idUserTest)});
  }
  getDoneTest(idQuestion: string, question: string, answer1: string, answer2: string, answer3: string, answer4: string,open: number, idTest): Observable<TestDoneResultModel[]> {
    return this.http.post<TestDoneResultModel[]>('http://localhost:3000/api/user/getDoneTest/', {
      idQuestion,
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      open,
    },{ params: new HttpParams().set('idTest', idTest)} );
  }
  getRating(nameS: string, rating: string, iduser: string): Observable<ContentResultModel> {
    return this.http.post<ContentResultModel>('http://localhost:3000/api/user/getRating', {
      nameS,
      rating,
    }, {params: new HttpParams().set('iduser', iduser)});
  }

  getTestRating(nameS: string, rating: string, testName: string, idsubject: string): Observable<TestRatingResultModel> {
    return this.http.post<TestRatingResultModel>('http://localhost:3000/api/user/getTestRating', {
      nameS,
      rating,
      testName,
      idsubject,
    } );
  }

  getTestList(idTest: string, idsubject: string, iduser: string): Observable<TestListResultModel> {
    return this.http.post<TestListResultModel>('http://localhost:3000/api/user/getTestList', {
      idTest,
      idsubject
    },{params: new HttpParams().set('iduser', iduser)} );
  }
  getSubject(subject: string): Observable<ClassesListResultModel> {
    return this.http.post<ClassesListResultModel>('http://localhost:3000/api/user/getSubject', {
      subject,
    });
  }

  getSubjectStudent(iduser: string, name: string, surname: string, rating: string, idsubject: string): Observable<StudentResultModel> {
    return this.http.post<StudentResultModel>('http://localhost:3000/api/user/getSubjectStudent', {
      iduser,
      name,
      surname,
      rating,
    } , { params: new HttpParams().set('idsubject', idsubject )} );
  }
  getMyClass(login: string): Observable<ClassesListResultModel> {
    return this.http.post<ClassesListResultModel>('http://localhost:3000/api/user/getMyClass', {
      login,
    });
  }
  addTestName(testName: string, idsubject: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/user/addTestName', {
    testName,
    idsubject,
    });
  }
  getTestName(idTest: string, testName: string, idsubject: string): Observable<AddTestResultModel> {
    return this.http.post<AddTestResultModel>('http://localhost:3000/api/user/getTestName', {
    idTest,
    testName,
    } ,{ params: new HttpParams().set('idsubject', idsubject )} );
  }
  getTestNameSub(idTest: string, testName: string, idsubject: string): Observable<AddTestResultModel> {
    return this.http.post<AddTestResultModel>('http://localhost:3000/api/user/getTestNameSub', {
    idTest,
    testName,
    } ,{ params: new HttpParams().set('idsubject', idsubject )} );
  }
  addAnswer(idTest: string, login: string,  answer: string, idQuestion: string,iduser: string): Observable<AnswerResultModel> {
    return this.http.post<AnswerResultModel>('http://localhost:3000/api/user/addAnswer', {
      idTest,
      login,
      answer,
      idQuestion,
      iduser,
    });
  }

  getTestNameById(idTest: string, testName: string, idTest2: string): Observable<AddTestResultModel> {
    return this.http.post<AddTestResultModel>('http://localhost:3000/api/user/getTestNameById', {
    idTest,  
    testName,
    } ,{ params: new HttpParams().set('idTest', idTest2 + '')} );
  }
  getTestNameBySubject(idTest: string, testName: string, idsubject: string): Observable<AddTestResultModel> {
    return this.http.post<AddTestResultModel>('http://localhost:3000/api/user/getTestNameBySubject', {
    idTest,  
    testName,
    } ,{ params: new HttpParams().set('idsubject', idsubject + '')} );
  }
  addIdTestToSubjecttest(idsubject: string, idTest: string ): Observable <any>{
    return this.http.post<any>('http://localhost:3000/api/user/addIdTestToSubjecttest', {
      } ,{ params: new HttpParams().set('idsubject', idsubject ).set('idTest', idTest)} );
  }
  showTestDoneByUser(iduser: string, name: string, surname: string, idTest: string, testName: string, idsubject: string): Observable <TestDoneByUserResultModel>{
    return this.http.post<TestDoneByUserResultModel>('http://localhost:3000/api/user/showTestDoneByUser', {
      iduser,
      name,
      surname,
      idTest,
      testName,
      },{ params: new HttpParams().set('idsubject', idsubject )} );
  }
  addScore( points: string, rating: string, iduser: string, idTest: string): Observable <CheckTestResultModel>{
    return this.http.post<CheckTestResultModel>('http://localhost:3000/api/user/addScore', {
      rating,
      points,
      idTest,
      iduser,
      } );
  }
  changepassword( password: string, iduser: string ): Observable <ChangePasswordResultModel>{
    return this.http.post<ChangePasswordResultModel>('http://localhost:3000/api/user/changepassword', {
    password,
    },{ params: new HttpParams().set('iduser', iduser )} );
  }

}
