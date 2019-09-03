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
  setCredentials(login: string, password: string, role: string) {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);

  }
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  public isAdmin() {
    console.log(localStorage.getItem('login'));
    return localStorage.getItem('role') === "admin";
  }
  public isStudent() {
    return localStorage.getItem('role') === "student";
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
    return localStorage.getItem('idsubject');
  }
  public setSubjectId(idsubject: string) {
     localStorage.setItem('idsubject', idsubject);
  }
  public getIdUser() {
    return localStorage.getItem('iduser');
  }
  public setIdUser(iduser: string) {
    localStorage.setItem('iduser', iduser);
  }
  public getIdSubjectAdmin() {
    return localStorage.getItem('idsubject');
  }
  public setIdSubjectAdmin(idsubject: string) {
    localStorage.setItem('idsubject', idsubject);
  }
  public getNewTestName() {
    return localStorage.getItem('testName');
  }
  public setNewTestName(testName: string) {
    localStorage.setItem('testName', testName);
  }
  public setIdUserTest(idUserTest: string) {
    localStorage.setItem('idUserTest', idUserTest);
  }
  public getIdUserTest() {
    return localStorage.getItem('idUserTest');
  }
  public getpassword() {
    return localStorage.getItem('password');
  }
  public setNewPassword(password: string) {
    localStorage.setItem('password', password);
  }
}