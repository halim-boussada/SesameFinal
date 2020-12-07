import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { url } from "inspector";
import { Router } from "@angular/router";
@Component({
  selector: "app-pro-student",
  templateUrl: "./pro-student.component.html",
  styleUrls: ["./pro-student.component.css"],
})
export class ProStudentComponent implements OnInit {
  constructor(
    private _http: HttpService,

    private storage: AngularFireStorage,
    private local: LocalService,
    private router: Router
  ) {}
  userInfo: any;
  name: any;
  lastname: any;
  email: any;
  password: any;
  imageUrl: any;
  class: any;
  phoneNumber: any;
  user: any;
  image: string = "";

  ngOnInit(): void {
    var user = localStorage.getItem("vue");
    var obj = { email: user };
    this._http.getstudentbymail(obj).subscribe((data) => {
      this.userInfo = data;
      let user = this.userInfo[0];
      this.name = user.name;
      this.lastname = user.lastname;
      this.email = user.email;
      this.image = user.imageUrl;
      this.class = user.class;
      this.phoneNumber = user.phoneNumber;
    });
  }
  gotoMybookings() {
    this.router.navigateByUrl("/student");
  }
  viewbookings() {
    this.router.navigateByUrl("/sbookings");
  }
  booknow() {
    this.router.navigateByUrl("/student");
  }
  home() {
    this.router.navigateByUrl("/home/student");
  }
  MyProfile() {
    this.router.navigateByUrl("/profile/student");
  }
}
