import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { url } from "inspector";
import { Router } from "@angular/router";
@Component({
  selector: "app-studenthome",
  templateUrl: "./studenthome.component.html",
  styleUrls: ["./studenthome.component.css"],
})
export class StudenthomeComponent implements OnInit {
  timeleft: any;

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
    var user = localStorage.getItem("connected");

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
  endTime = new Date("december 09,2020 09:00:00").getTime();
  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.endTime - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.timeleft =
      days +
      " Days " +
      hours +
      " Hours " +
      minutes +
      " Minutes " +
      seconds +
      " Seconds";
  });
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
