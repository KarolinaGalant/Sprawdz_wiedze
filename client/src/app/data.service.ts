import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');

  }
  setCredentials(login: string, password: string) {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);

  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');

  }

  public isAdmin() {
    console.log(localStorage.getItem('login'));
    return localStorage.getItem('login') === "admin";

  }
  public getLogin() {
    return localStorage.getItem('login');
  }
  public getSubj() {
    return localStorage.getItem('name');
  }
  public getQuestionId() {
    return localStorage.getItem('idQuestion');
  }

  public setTestId(testId: number){
    localStorage.setItem('testId', testId + '');
  }

  public getTestId(){
    return localStorage.getItem('testId');
  }

  public getSubjectId() {
    return localStorage.getItem('subjectId');
  }
  public setSubjectId(subjectid: string) {
     localStorage.setItem('subjectId', subjectid);
  }
}