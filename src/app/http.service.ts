import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:3000";

  getTimes() {
    return this.http.get(this.ROOT_URL + "/app/useres/collectTimes");
  }

  getCompanies() {
    return this.http.get(this.ROOT_URL + "/app/useres/collectcompanies");
  }
  getBooking() {
    return this.http.get(this.ROOT_URL + "/app/useres/bookingTimes");
  }
  postTimes(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/addTime", obj);
  }
  postRooms(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/bookForcompany", obj);
  }
  getupdateBookedTime(a) {
    return this.http.post(this.ROOT_URL + "/app/useres/updateBookedTime", a);
  }
  CompanyBookedTime(a) {
    return this.http.post(this.ROOT_URL + "/app/useres/CompanyBookedTime", a);
  }
  getRooms() {
    return this.http.get(this.ROOT_URL + "/app/useres/collectrooms");
  }
  postRoom(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/updateroom", obj);
  }
  studentpost(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/bookForStudent", obj);
  }
  studentpostBookedTime(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/studentBookedTime", obj);
  }
  collectroomsFc(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/collectroomsFc", obj);
  }
  getStudentime(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/studentverif", obj);
  }
  collectroomsbyid(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/collectroomsbyid", obj);
  }

  signupS(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/signupS", obj);
  }
  signupC(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/signupC", obj);
  }
  // getUserbymail
  getstudentbymail(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/getstudentbymail", obj);
  }
  getcompanybymail(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/getcompanybymail", obj);
  }

  // endgetuserbymail
  loginStudent(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/singinS", obj);
  }
  loginCompany(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/singinC", obj);
  }
  // this is where i controle my min booking

  getaffichage(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/getaffichage", obj);
  }
  insertMin(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/insertminbooked", obj);
  }
  collectmin(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/collectminbooking", obj);
  }

  updateaff(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/updateaffichage", obj);
  }
  // end min controle
  companyData(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/companyData", obj);
  }
  studentData(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/studentData", obj);
  }
  yourstudents(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/yourstudents", obj);
  }
  getCompany(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/getcompanybyName", obj);
  }
  loginAdmin(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/Admin", obj);
  }
  alpha(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/alpha", obj);
  }
}
